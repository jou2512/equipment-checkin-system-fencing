"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft } from "lucide-react";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

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

export default function MobileSubmissionDetailsPage() {
  const params = useParams<{ checkInId: string; tournamentId: string }>();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("details");

  // Fetch tournament data
  const { data: tournament, isLoading: isLoadingTournament } =
    useQuery<Tournament>({
      queryKey: ["tournament", params.tournamentId],
      queryFn: async () => {
        const response = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.TOURNAMENTS,
          params.tournamentId as string
        );
        return response as Tournament;
      },
      enabled: !!params.tournamentId,
    });

  // Fetch check-in data
  const { data: checkIn, isLoading } = useQuery({
    queryKey: ["checkIn", params.checkInId],
    queryFn: async () => {
      const response = await databases.getDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        params.checkInId as string
      );
      return response as CheckIn;
    },
  });

  if (isLoading || isLoadingTournament) {
    return <div className="p-4 text-center">Loading submission details...</div>;
  }

  if (!checkIn) {
    return <div className="p-4 text-center">Submission not found</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.back()}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">#{checkIn.checkNumber}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-medium">Fencer Name:</p>
              <p>{checkIn.fencerName || "Anonymous"}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Nationality:</p>
              <Badge variant="outline">
                {checkIn.nationalityCode || "N/A"}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Weapon:</p>
              <Badge>{checkIn.weaponType}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Status:</p>
              <Badge variant={checkIn.CheckInStatus as CheckInCheckInStatus}>
                {checkIn.CheckInStatus}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
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
                      <Badge variant="outline">
                        {item.quantity} / {maxQuantity}
                      </Badge>
                    </div>
                  );
                })}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
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
      </Tabs>
    </div>
  );
}
