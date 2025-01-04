"use client";

import { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, usePathname, useRouter } from "next/navigation";
import { databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";
import {
  CheckIn,
  CheckInCheckInStatus,
  DATABASE_IDS,
  COLLECTION_IDS,
} from "@/lib/appwrite/types";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, Trash2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MobileSubmissionsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const params = useParams()
  
  const currentTournamentId = params.tournamentId;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState<
    CheckInCheckInStatus[]
  >([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const fetchSubmissions = useCallback(async () => {
    if (!currentTournamentId) {
      throw new Error("No tournament selected");
    }

    const pageSize = 20;
    const queries = [
      Query.equal("tournaments", currentTournamentId),
      Query.limit(pageSize),
      Query.offset((page - 1) * pageSize),
      ...(search ? [Query.search("fencerName", search)] : []),
      ...(selectedStatuses.length > 0
        ? [Query.contains("CheckInStatus", selectedStatuses.join("|"))]
        : []),
      Query.orderDesc("$createdAt"),
    ];

    const response = await databases.listDocuments(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.CHECKINS,
      queries
    );

    return {
      data: response.documents as CheckIn[],
      total: response.total,
    };
  }, [currentTournamentId, page, search, selectedStatuses]);

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      "submissions",
      currentTournamentId,
      page,
      search,
      selectedStatuses,
    ],
    queryFn: fetchSubmissions,
    enabled: !!currentTournamentId,
  });

  const deleteSubmissionsMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      const deletePromises = ids.map((id) =>
        databases.deleteDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.CHECKINS,
          id
        )
      );
      return Promise.all(deletePromises);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["submissions", currentTournamentId],
      });
      toast({
        title: "Submissions Deleted",
        description: `${selectedItems.length} submission(s) deleted successfully.`,
      });
      setSelectedItems([]);
    },
    onError: (error) => {
      console.error("Delete operation failed:", error);
      toast({
        title: "Delete Failed",
        description: "Unable to delete submissions. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusToggle = (status: CheckInCheckInStatus) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
    setPage(1);
  };

  const handleItemSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedItems.length > 0) {
      deleteSubmissionsMutation.mutate(selectedItems);
    }
  };

  if (isError) {
    return <div className="p-4 text-center">Error loading submissions</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Submissions</h1>
        <div className="flex space-x-2">
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Filter Submissions</SheetTitle>
              </SheetHeader>
              <div className="py-4 space-y-4">
                {Object.values(CheckInCheckInStatus).map((status) => (
                  <div key={status} className="flex items-center space-x-2">
                    <Checkbox
                      id={status}
                      checked={selectedStatuses.includes(status)}
                      onCheckedChange={() => handleStatusToggle(status)}
                    />
                    <label
                      htmlFor={status}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {status}
                    </label>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          {selectedItems.length > 0 && (
            <Button
              variant="destructive"
              size="icon"
              onClick={handleDeleteSelected}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search submissions..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-8"
        />
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        {isLoading ? (
          <div className="text-center py-4">Loading submissions...</div>
        ) : data?.data?.length ? (
          <div className="space-y-4">
            {data.data.map((submission) => (
              <Card key={submission.$id} className="relative">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">
                      #{submission.checkNumber}
                    </CardTitle>
                    <Checkbox
                      checked={selectedItems.includes(submission.$id as string)}
                      onCheckedChange={() =>
                        handleItemSelect(submission.$id as string)
                      }
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      {submission.fencerName || "Anonymous"}
                    </p>
                    <div className="flex space-x-2">
                      <Badge variant="outline">
                        {submission.nationalityCode || "N/A"}
                      </Badge>
                      <Badge variant="secondary">{submission.weaponType}</Badge>
                    </div>
                    <Badge
                      variant={submission.CheckInStatus as CheckInCheckInStatus}
                    >
                      {submission.CheckInStatus}
                    </Badge>
                  </div>
                  <Link href={`${pathname}/${submission.$id}`}>
                    <Button
                      variant="ghost"
                      className="absolute right-2 bottom-2"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-4">No submissions found.</div>
        )}
      </ScrollArea>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-sm">Page {page}</span>
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={!data?.data?.length || data.data.length < 20}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
