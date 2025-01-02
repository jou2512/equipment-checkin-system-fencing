"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";
import {
  CheckIn,
  Checkinitem,
  CheckinitemStatus,
  CheckInCheckInStatus,
  DATABASE_IDS,
  COLLECTION_IDS,
} from "@/lib/appwrite/types";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import {
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  PlayCircle,
  CheckSquare,
  CircleDashed,
  CircleAlert,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function StatusCheckPage() {
  const queryClient = useQueryClient();
  const { currentTournamentId } = useTournamentStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCheckIn, setSelectedCheckIn] = useState<CheckIn | null>(null);

  const { data: checkIn, isLoading } = useQuery<CheckIn | null>({
    queryKey: ["status-check", currentTournamentId, searchQuery],
    queryFn: async () => {
      if (!searchQuery) return null;
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.equal("checkNumber", parseInt(searchQuery, 10)),
          Query.limit(1),
        ]
      );
      return (response.documents[0] as CheckIn) || null;
    },
    enabled: !!currentTournamentId && !!searchQuery,
  });

  useEffect(() => {
    if (checkIn) {
      setSelectedCheckIn(checkIn);
    }
  }, [checkIn]);

  const updateCheckInMutation = useMutation({
    mutationFn: async (updates: Partial<CheckIn>) => {
      if (!selectedCheckIn) throw new Error("No check-in selected");
      return await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        selectedCheckIn.$id,
        updates
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["status-check", currentTournamentId, searchQuery],
      });
      toast({
        title: "Check-in Updated",
        description: "The check-in has been successfully updated.",
      });
    },
    onError: (error) => {
      console.error("Update failed:", error);
      toast({
        title: "Update Failed",
        description: "Unable to update the check-in. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkIn) {
      setSelectedCheckIn(checkIn);
    } else {
      setSelectedCheckIn(null);
    }
  };

  const handleItemStatusChange = (
    itemId: string,
    status: CheckinitemStatus
  ) => {
    if (!selectedCheckIn) return;
    const updatedItemChecks = selectedCheckIn.itemChecks.map((item) =>
      item.$id === itemId ? { ...item, status } : item
    );
    updateCheckInMutation.mutate({ itemChecks: updatedItemChecks });
  };

  const handleCheckInStatusChange = (status: CheckInCheckInStatus) => {
    if (!selectedCheckIn) return;
    updateCheckInMutation.mutate({ CheckInStatus: status });
  };

  const handleStartReview = () => {
    if (!selectedCheckIn) return;
    const updatedItemChecks = selectedCheckIn.itemChecks.map((item) => ({
      ...item,
      status: "in_review" as CheckinitemStatus,
    }));
    updateCheckInMutation.mutate({
      CheckInStatus: CheckInCheckInStatus.IN_REVIEW,
      itemChecks: updatedItemChecks,
    });
  };

  const handleReadyForPickup = () => {
    if (!selectedCheckIn) return;

    // Filter out items that are in_review
    const relevantItems = selectedCheckIn.itemChecks.filter(
      (item) => item.status !== "in_review"
    );

    // Check if all relevant items are approved
    const allItemsApproved = relevantItems.every(
      (item) => item.status === "approved"
    );

    // Check if any of the relevant items are rejected
    const someItemsRejected = relevantItems.some(
      (item) => item.status === "rejected"
    );

    let newStatus: CheckInCheckInStatus;
    if (allItemsApproved) {
      newStatus = CheckInCheckInStatus.APPROVED;
    } else if (someItemsRejected) {
      newStatus = CheckInCheckInStatus.PARTIALLY_APPROVED;
    } else {
      newStatus = CheckInCheckInStatus.REJECTED;
    }

    updateCheckInMutation.mutate({ CheckInStatus: newStatus });
  };

  return (
    <div className="p-4 space-y-4 mb-15">
      <h1 className="text-2xl font-bold">Status Check</h1>

      <form onSubmit={handleSearch} className="flex space-x-2 ">
        <Input
          placeholder="Enter check number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>

      {isLoading && <div className="text-center">Loading...</div>}

      {selectedCheckIn && (
        <Card>
          <CardHeader>
            <CardTitle>Check #{selectedCheckIn.checkNumber}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>Fencer:</strong>{" "}
                {selectedCheckIn.fencerName || "Anonymous"}
              </p>
              <p>
                <strong>Nationality:</strong>{" "}
                {selectedCheckIn.nationalityCode || "N/A"}
              </p>
              <p>
                <strong>Weapon:</strong> {selectedCheckIn.weaponType}
              </p>
              <div className="flex items-center">
                <strong>Status:</strong>
                <Select
                  value={selectedCheckIn.CheckInStatus}
                  onValueChange={(value) =>
                    handleCheckInStatusChange(value as CheckInCheckInStatus)
                  }
                >
                  <SelectTrigger className="w-[180px] ml-2">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(CheckInCheckInStatus).map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4 space-y-2 space-x-2">
              <Button onClick={handleStartReview}>
                <PlayCircle className="h-4 w-4 mr-2" />
                Start Review
              </Button>
              <Button onClick={handleReadyForPickup}>
                <CheckSquare className="h-4 w-4 mr-2" />
                Ready for Pickup
              </Button>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Equipment Items</h3>
              {(selectedCheckIn.itemChecks as Checkinitem[]).map((item) => (
                <div key={item.$id} className="mb-4 p-2 border rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.itemName}</span>
                    <Badge variant="outline">Quantity: {item.quantity}</Badge>
                  </div>
                  <RadioGroup
                    value={item.status}
                    onValueChange={(value) =>
                      handleItemStatusChange(
                        item.$id,
                        value as CheckinitemStatus
                      )
                    }
                    className="flex space-x-2"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="approved"
                              id={`${item.$id}-approved`}
                            />
                            <Label htmlFor={`${item.$id}-approved`}>
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </Label>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Approved</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="partially_approved"
                              id={`${item.$id}-partially_approved`}
                            />
                            <Label htmlFor={`${item.$id}-partially_approved`}>
                              <CircleAlert className="h-4 w-4 text-orange-500" />
                            </Label>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Partially Approved</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="rejected"
                              id={`${item.$id}-rejected`}
                            />
                            <Label htmlFor={`${item.$id}-rejected`}>
                              <XCircle className="h-4 w-4 text-red-500" />
                            </Label>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Rejected</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="pending"
                              id={`${item.$id}-pending`}
                            />
                            <Label htmlFor={`${item.$id}-pending`}>
                              <CircleDashed className="h-4 w-4" />
                            </Label>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Pending</p>
                        </TooltipContent>
                      </Tooltip>

                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem
                              value="in_review"
                              id={`${item.$id}-in_review`}
                            />
                            <Label htmlFor={`${item.$id}-in_review`}>
                              <Search className="h-4 w-4 text-yellow-500" />
                            </Label>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>In Review</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </RadioGroup>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {!isLoading && !checkIn && searchQuery && (
        <div className="text-center text-red-500">
          No check-in found with the given number.
        </div>
      )}
    </div>
  );
}
