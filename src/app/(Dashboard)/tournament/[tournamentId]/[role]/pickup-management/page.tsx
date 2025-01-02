"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";
import {
  CheckIn,
  CheckInCheckInStatus,
  DATABASE_IDS,
  COLLECTION_IDS,
} from "@/lib/appwrite/types";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, Eye } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STATUS_COLORS = {
  approved: "bg-green-100 text-green-800",
  partially_approved: "bg-orange-100 text-orange-800",
  rejected: "bg-red-100 text-red-800",
};

export default function MobilePickupManagementPage() {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const { currentTournamentId } = useTournamentStore();
  const [selectedSubmission, setSelectedSubmission] = useState<CheckIn | null>(
    null
  );
  const [pickupComment, setPickupComment] = useState("");

  // Fetch Ready Submissions
  const { data: submissions, isLoading } = useQuery<CheckIn[]>({
    queryKey: ["pickup-submissions", currentTournamentId],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal("tournaments", currentTournamentId as string),
          Query.contains("CheckInStatus", [
            "approved",
            "partially_approved",
            "rejected",
          ]),
          Query.equal("pickupConfirmed", false),
          Query.orderDesc("$createdAt"),
          Query.limit(300),
        ]
      );
      return response.documents as CheckIn[];
    },
    refetchInterval: 30000,
  });

  // Confirm Pickup Mutation
  const confirmPickupMutation = useMutation({
    mutationFn: async (submission: CheckIn) => {
      return await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        submission.$id as string,
        {
          pickupConfirmed: true,
          pickupComment: pickupComment,
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["pickup-submissions", currentTournamentId],
      });
      setSelectedSubmission(null);
      setPickupComment("");
      toast({
        title: "Pickup Confirmed",
        description: "The submission has been marked as picked up.",
      });
    },
    onError: (error) => {
      console.error("Pickup confirmation failed:", error);
      toast({
        title: "Pickup Confirmation Failed",
        description: "Unable to confirm pickup. Please try again.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return <div className="p-4 text-center">Loading submissions...</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Pickup Management</h1>

      {submissions?.length ? (
        submissions.map((submission) => (
          <Card key={submission.$id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-semibold">
                  #{submission.checkNumber}
                </div>
                <Badge
                  className={
                    STATUS_COLORS[
                      submission.CheckInStatus as keyof typeof STATUS_COLORS
                    ]
                  }
                >
                  {submission.CheckInStatus}
                </Badge>
              </div>
              <p className="text-sm mb-2">
                {submission.fencerName || "Anonymous"}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  {format(
                    new Date(submission.$createdAt),
                    "MMM dd, yyyy HH:mm"
                  )}
                </div>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedSubmission(submission)}
                  >
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Confirm Pickup
                  </Button>
                  <Link
                    href={`${pathname.replace(
                      "/pickup-management",
                      ""
                    )}/submissions/${submission.$id}`}
                    passHref
                  >
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center text-gray-500">
          No submissions ready for pickup
        </div>
      )}

      {/* Pickup Confirmation Dialog */}
      <Dialog
        open={!!selectedSubmission}
        onOpenChange={() => setSelectedSubmission(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Confirm Pickup for Check #{selectedSubmission?.checkNumber}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <strong>Fencer:</strong>{" "}
              {selectedSubmission?.fencerName || "Anonymous"}
            </div>
            <div>
              <strong>Nationality:</strong>{" "}
              {selectedSubmission?.nationalityCode || "N/A"}
            </div>
            <div>
              <strong>Submitted At:</strong>{" "}
              {selectedSubmission?.$createdAt &&
                format(
                  new Date(selectedSubmission.$createdAt),
                  "MMM dd, yyyy HH:mm"
                )}
            </div>
            <Textarea
              placeholder="Optional pickup notes..."
              value={pickupComment}
              onChange={(e) => setPickupComment(e.target.value)}
            />
            <Button
              onClick={() =>
                selectedSubmission &&
                confirmPickupMutation.mutate(selectedSubmission)
              }
              className="w-full"
            >
              Confirm Pickup
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
