"use client";

import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Activity, Clock, Filter, ArrowUpDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { Submission, DATABASE_IDS, COLLECTION_IDS, CheckIn } from "@/lib/appwrite/types";
import { Query } from "appwrite";
import Link from "next/link";

export function ActivityLogSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [actionFilter, setActionFilter] = useState<"all" | "create" | "update">(
    "all"
  );

  // Fetch submissions with real-time capabilities
  const { data: submissions, isLoading } = useQuery<Submission[]>({
    queryKey: ["activityLog", sortOrder, actionFilter],
    queryFn: async () => {
      const queries = [
        // Filter for create and update actions
        ...(actionFilter === "all"
          ? [
              Query.or([
                Query.contains("action", "create"),
                Query.contains("action", "update"),
              ]),
            ]
          : [Query.equal("action", actionFilter)]),

        // Sort by creation time
        ...(sortOrder === "desc"
          ? [Query.orderDesc("$createdAt")]
          : [Query.orderAsc("$createdAt")]),

        // Limit to recent entries
        Query.limit(50),
      ];

      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.SUBMISSIONS,
        queries
      );

      return response.documents as Submission[];
    },
    // Enable real-time updates
    refetchInterval: 5000,
  });

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
          <Activity className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetClose onClick={() => setIsOpen(false)} />
      <SheetContent side="right" className="w-[600px]">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <Activity className="mr-2 h-6 w-6" />
            Activity Log
          </SheetTitle>
        </SheetHeader>

        {/* Filtering and Sorting Controls */}
        <div className="flex justify-between items-center my-4">
          <div className="flex space-x-2">
            <Select
              value={actionFilter}
              onValueChange={(value: "all" | "create" | "update") =>
                setActionFilter(value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter Actions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="create">Create</SelectItem>
                <SelectItem value="update">Update</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setSortOrder(sortOrder === "desc" ? "asc" : "desc")
              }
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Activity Log List */}
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-200px)]">
          {isLoading ? (
            <div className="text-center text-muted-foreground">Loading...</div>
          ) : submissions?.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No recent activities
            </div>
          ) : (
            submissions?.map((submission) => (
              <div
                key={submission.$id}
                className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold capitalize">
                      {submission.action} Submission
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(
                        submission.$createdAt as string
                      ).toLocaleString()}
                    </div>
                  </div>
                  <Link
                    href={`/admin/submissions/${
                      (submission.checkInDocument as CheckIn).$id as string
                    }`}
                    passHref
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
                {submission.comment && (
                  <div className="mt-2 text-sm italic text-muted-foreground">
                    {submission.comment}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
