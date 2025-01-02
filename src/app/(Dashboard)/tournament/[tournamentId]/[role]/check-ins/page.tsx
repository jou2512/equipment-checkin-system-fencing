"use client";

import { useCheckIns } from "@/hooks/use-checkIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  Clock,
  ChevronLeft,
  ChevronRight,
  PackageSearch,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { useState } from "react";
import Link from "next/link";

export default function MyCheckIns() {
  const params = useParams();
  const router = useRouter();
  const currentTournamentId = params.tournamentId as string;
  const { checkIns, isLoading } = useCheckIns();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter check-ins for current tournament
  const relevantCheckIns = checkIns.filter(
    (checkIn) =>
      checkIn.tournaments?.$id === currentTournamentId &&
      checkIn.fencerID === user?.$id
  );

  const totalPages = Math.ceil(relevantCheckIns.length / itemsPerPage);
  const paginatedCheckIns = relevantCheckIns.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="text-green-500" />;
      case "rejected":
        return <XCircle className="text-red-500" />;
      case "in_review":
        return <Clock className="text-yellow-500" />;
      default:
        return <Clock className="text-gray-500" />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
          <p className="text-muted-foreground">Loading check-ins...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Check-ins</h1>
        <Button variant="outline" onClick={() => router.back()}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      {relevantCheckIns.length === 0 ? (
        <Card className="py-12">
          <CardContent className="flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-primary/10 p-6 mb-6">
              <PackageSearch className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">No Check-ins Found</h2>
            <div className="max-w-md space-y-6">
              <p className="text-muted-foreground">
                You haven't submitted any equipment for checking yet. Here's how to get started:
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Step 1: Prepare Your Items</h3>
                  <p className="text-sm text-muted-foreground">Count all your equipment items that need to be checked.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Step 2: Visit the Check-in Counter</h3>
                  <p className="text-sm text-muted-foreground">Go to the equipment check-in counter and provide your name.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Step 3: Track Your Status</h3>
                  <p className="text-sm text-muted-foreground">Once submitted, you'll be able to track your equipment status here.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="space-y-4">
            {paginatedCheckIns.map((checkIn) => (
              <Card
                key={checkIn.$id}
                className="transition-all duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Check-in #{checkIn.checkNumber}</span>
                    <Badge variant="outline">
                      {checkIn.weaponType.toUpperCase()}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Date:{" "}
                        {new Date(
                          checkIn.$createdAt as string
                        ).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Weapon: {checkIn.weaponType}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(checkIn.CheckInStatus as string)}
                      <Badge variant="secondary">{checkIn.CheckInStatus}</Badge>
                    </div>
                  </div>

                  {checkIn.itemChecks && (
                    <div>
                      <h3 className="font-semibold mb-2">Items Checked</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {checkIn.itemChecks.map((item: any) => (
                          <div
                            key={item.$id}
                            className="flex justify-between items-center p-2 bg-secondary rounded-md"
                          >
                            <span className="font-medium">{item.itemName}</span>
                            <Badge
                              variant={
                                item.status === "approved"
                                  ? "success"
                                  : "warning"
                              }
                              className="ml-2"
                            >
                              {item.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
