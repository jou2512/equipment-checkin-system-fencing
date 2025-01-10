"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import {
  CheckIn,
  CheckInCheckInStatus,
  Checkinitem,
  CheckinitemStatus,
  DATABASE_IDS,
  COLLECTION_IDS,
  ItemConfig,
  Tournament,
} from "@/lib/appwrite/types";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, Edit, Save, X } from "lucide-react";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { useTournaments } from "@/hooks/use-tournaments";

interface MobileSubmissionDetailsProps {
  options?: {
    useParams?: boolean;
    useStore?: boolean;
    enableEdit?: boolean;
    enableStatusUpdate?: boolean;
    enableHistory?: boolean;
  };
}

const getStatusIcon = (status: CheckinitemStatus) => {
  switch (status) {
    case "approved":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />;
    case "pending":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    default:
      return null;
  }
};

export default function MobileSubmissionDetailsPage({
  options = {
    useParams: false,
    useStore: true,
    enableEdit: true,
    enableStatusUpdate: true,
    enableHistory: true,
  },
}: MobileSubmissionDetailsProps) {
  const params = useParams<{ checkInId: string; tournamentId: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();

  // State management
  const [activeTab, setActiveTab] = useState("details");
  const [isEditing, setIsEditing] = useState(false);
  const [editedCheckIn, setEditedCheckIn] = useState<Partial<CheckIn>>({});

  // Tournament data handling based on options
  const { SelectedTournament } = useTournaments();
  const { tournament: storeTournament, isLoading: isLoadingStoreTournament } =
    options.useStore
      ? SelectedTournament()
      : { tournament: null, isLoading: false };

  // Fetch tournament data if using params
  const { data: paramsTournament, isLoading: isLoadingParamsTournament } =
    useQuery<Tournament>({
      queryKey: ["tournament", params?.tournamentId],
      queryFn: async () => {
        const response = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          params?.tournamentId as string
        );
        return response as Tournament;
      },
      enabled: !!params?.tournamentId && options.useParams,
    });

  const tournament = options.useParams ? paramsTournament : storeTournament;
  const isLoadingTournament =
    isLoadingParamsTournament || isLoadingStoreTournament;

  // Fetch check-in data
  const { data: checkIn, isLoading } = useQuery({
    queryKey: ["checkIn", params?.checkInId],
    queryFn: async () => {
      const response = await databases.getDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        params?.checkInId as string
      );
      return response as CheckIn;
    },
  });

  // Initialize edited data when check-in data is loaded
  useEffect(() => {
    if (checkIn) {
      setEditedCheckIn({
        fencerName: checkIn.fencerName,
        nationalityCode: checkIn.nationalityCode,
        weaponType: checkIn.weaponType,
        itemChecks: checkIn.itemChecks,
        CheckInStatus: checkIn.CheckInStatus,
      });
    }
  }, [checkIn]);

  // Update mutation
  const updateCheckInMutation = useMutation({
    mutationFn: async (updates: Partial<CheckIn>) => {
      return databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        params?.checkInId as string,
        updates
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["checkIn", params?.checkInId],
      });
      setIsEditing(false);
      toast({
        title: "Check-in Updated",
        description: "The submission has been successfully updated.",
      });
    },
    onError: (error) => {
      console.error("Update failed:", error);
      toast({
        title: "Update Failed",
        description: "Unable to update the submission. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Event handlers
  const handleSave = () => {
    updateCheckInMutation.mutate(editedCheckIn);
  };

  const handleInputChange = (field: keyof CheckIn, value: any) => {
    setEditedCheckIn((prev) => ({ ...prev, [field]: value }));
  };

  const handleItemQuantityChange = (itemId: string, quantity: number) => {
    setEditedCheckIn((prev) => ({
      ...prev,
      itemChecks: prev.itemChecks?.map((item) =>
        (item as Checkinitem).$id === itemId
          ? { ...(item as Checkinitem), quantity }
          : item
      ),
    }));
  };

  // Loading and error states
  if (isLoading || isLoadingTournament) {
    return <div className="p-4 text-center">Loading submission details...</div>;
  }

  if (!checkIn) {
    return <div className="p-4 text-center">Submission not found</div>;
  }

  // Field editability check
  // @ts-expect-error
  const isFieldEditable = options.enableEdit && !checkIn.fencerId;

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.back()}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        {options.enableEdit &&
          (!isEditing ? (
            <Button
              variant="outline"
              onClick={() => setIsEditing(true)}
              disabled={!isFieldEditable}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          ) : (
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">#{checkIn.checkNumber}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Fencer Name:</p>
              {isEditing && isFieldEditable ? (
                <Input
                  value={editedCheckIn.fencerName || ""}
                  onChange={(e) =>
                    handleInputChange("fencerName", e.target.value)
                  }
                  className="max-w-[200px]"
                />
              ) : (
                <p>{checkIn.fencerName || "Anonymous"}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Nationality:</p>
              {isEditing && isFieldEditable ? (
                <Input
                  value={editedCheckIn.nationalityCode || ""}
                  onChange={(e) =>
                    handleInputChange("nationalityCode", e.target.value)
                  }
                  className="max-w-[200px]"
                  maxLength={3}
                />
              ) : (
                <Badge variant="outline">
                  {checkIn.nationalityCode || "N/A"}
                </Badge>
              )}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Weapon:</p>
              {isEditing && isFieldEditable ? (
                <Select
                  value={editedCheckIn.weaponType}
                  onValueChange={(value) =>
                    handleInputChange("weaponType", value)
                  }
                >
                  <SelectTrigger className="max-w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="foil">Foil</SelectItem>
                    <SelectItem value="epee">Epee</SelectItem>
                    <SelectItem value="sabre">Sabre</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Badge>{checkIn.weaponType}</Badge>
              )}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Status:</p>
              {isEditing && options.enableStatusUpdate ? (
                <Select
                  value={editedCheckIn.CheckInStatus}
                  onValueChange={(value) =>
                    handleInputChange("CheckInStatus", value)
                  }
                >
                  <SelectTrigger className="max-w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(CheckInCheckInStatus).map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Badge variant={checkIn.CheckInStatus as CheckInCheckInStatus}>
                  {checkIn.CheckInStatus}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details">Details</TabsTrigger>
          {options.enableHistory && (
            <TabsTrigger value="history">History</TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                {(checkIn.itemChecks as Checkinitem[]).map((item) => {
                  const itemConfig = tournament?.itemConfigs?.find(
                    (config) =>
                      (config as ItemConfig).itemName === item.itemName
                  );
                  const maxQuantity =
                    (itemConfig as ItemConfig)?.maxQuantity || 0;

                  return (
                    <div
                      key={item.$id}
                      className="flex justify-between items-center py-2 border-b"
                    >
                      <div className="flex items-center space-x-2">
                        <p>{item.itemName}</p>
                        <Badge
                          variant={
                            item.status === "approved"
                              ? "success"
                              : item.status === "rejected"
                              ? "destructive"
                              : "default"
                          }
                          className="flex items-center space-x-1"
                        >
                          {getStatusIcon(item.status as CheckinitemStatus)}
                          <span>{item.status}</span>
                        </Badge>
                      </div>
                      {isEditing ? (
                        <div className="flex items-center space-x-2">
                          <Input
                            type="number"
                            value={
                              (editedCheckIn.itemChecks as Checkinitem[])?.find(
                                (i) => i.itemName === item.itemName
                              )?.quantity || 0
                            }
                            onChange={(e) =>
                              handleItemQuantityChange(
                                item.itemName,
                                parseInt(e.target.value)
                              )
                            }
                            className="w-20"
                            min={0}
                            max={maxQuantity}
                          />
                          <span className="text-sm text-muted-foreground">
                            / {maxQuantity}
                          </span>
                        </div>
                      ) : (
                        <Badge variant="outline">
                          {item.quantity} / {maxQuantity}
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
        {options.enableHistory && (
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Submission History</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <p className="text-center text-muted-foreground">
                    No history available
                  </p>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
