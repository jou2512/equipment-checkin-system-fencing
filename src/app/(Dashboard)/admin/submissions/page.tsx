"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ChevronDown, ArrowUpDown, Trash2, MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { Query, ID } from "appwrite";
import {
  CheckIn,
  CheckInCheckInStatus,
  DATABASE_IDS,
  COLLECTION_IDS,
} from "@/lib/appwrite/types";
import { useTournamentStore } from "@/lib/store/tournament-store";
import { toast } from "@/hooks/use-toast";

/**
 * Performance metrics interface for tracking component operations
 */
interface PerformanceMetrics {
  operationId: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  type: "render" | "data-fetch" | "filter" | "delete";
  metadata?: Record<string, any>;
}

export default function SubmissionsManagementTable() {
  // Original state management
  const queryClient = useQueryClient();
  const { currentTournamentId } = useTournamentStore();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState<
    CheckInCheckInStatus[]
  >([]);
  const [rowSelection, setRowSelection] = useState({});
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Performance monitoring state
  const metricsRef = useRef<PerformanceMetrics[]>([]);
  const renderCountRef = useRef(0);

  /**
   * Track performance of an operation
   */
  const trackOperation = useCallback(
    (
      operationId: string,
      type: PerformanceMetrics["type"],
      metadata?: Record<string, any>
    ) => {
      const metric: PerformanceMetrics = {
        operationId,
        startTime: performance.now(),
        type,
        metadata,
      };

      return () => {
        metric.endTime = performance.now();
        metric.duration = metric.endTime - metric.startTime;
        metricsRef.current.push(metric);

        // Keep only last 100 metrics
        if (metricsRef.current.length > 100) {
          metricsRef.current.shift();
        }

        // Log slow operations in development
        if (process.env.NODE_ENV === "development" && metric.duration > 100) {
          console.warn(
            `Slow operation detected: ${operationId} took ${metric.duration.toFixed(
              2
            )}ms`,
            metric.metadata
          );
        }
      };
    },
    []
  );

  // Track component renders
  useEffect(() => {
    const endTracking = trackOperation(
      `render-${renderCountRef.current++}`,
      "render",
      { page, search, selectedStatuses: selectedStatuses.length }
    );
    return endTracking;
  });

  const [isInitialized, setIsInitialized] = useState(false);

  /**
   * Effect to handle tournament initialization
   */
  useEffect(() => {
    // If we have a tournament ID, mark as initialized
    if (currentTournamentId) {
      setIsInitialized(true);
    } else {
      // If no tournament is selected, show a message
      toast({
        title: "No Tournament Selected",
        description: "Please select a tournament to view submissions.",
        duration: 5000,
      });
      setIsInitialized(false);
    }
  }, [currentTournamentId]);

  /**
   * Enhanced fetchSubmissions with proper tournament validation
   */
  const fetchSubmissions = useCallback(async () => {
    // Validate tournament ID before proceeding
    if (!currentTournamentId) {
      throw new Error("No tournament selected");
    }

    try {
      const pageSize = 20;
      const queries = [
        Query.equal("tournaments", currentTournamentId),
        Query.limit(pageSize),
        Query.offset((page - 1) * pageSize),
        ...(search ? [Query.search("fencerName", search)] : []),
        ...(selectedStatuses.length > 0
          ? [Query.contains("CheckInStatus", selectedStatuses.join("|"))]
          : []),
        sortOrder === "desc"
          ? Query.orderDesc("$createdAt")
          : Query.orderAsc("$createdAt"),
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
    } catch (error) {
      console.error("Error fetching submissions:", error);
      throw error; // Re-throw to be handled by React Query
    }
  }, [currentTournamentId]);

  /**
   * Enhanced query with proper error and initialization handling
   */
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [
      "submissions",
      currentTournamentId,
      page,
      search,
      selectedStatuses,
      sortOrder,
    ],
    queryFn: fetchSubmissions,
    enabled: !!currentTournamentId && isInitialized, // Only run query when tournament is selected
    staleTime: 5000,
    retry: (failureCount, error) => {
      // Don't retry if no tournament is selected
      if (!currentTournamentId) return false;
      // Retry other errors up to 2 times
      return failureCount < 2;
    },
  });

  // Delete Mutation with performance tracking
  const deleteSubmissionsMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      const endTracking = trackOperation("deleteSubmissions", "delete", {
        itemCount: ids.length,
      });

      try {
        const deletePromises = ids.map((id) =>
          databases.deleteDocument(
            DATABASE_IDS.CHECKING_SYSTEM,
            COLLECTION_IDS.CHECKINS,
            id
          )
        );
        const results = await Promise.all(deletePromises);
        return results;
      } finally {
        endTracking();
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["submissions", currentTournamentId],
      });
      toast({
        title: "Submissions Deleted",
        description: `${
          Object.keys(rowSelection).length
        } submission(s) deleted successfully.`,
        variant: "default",
      });
      setRowSelection({});
      setDeleteDialogOpen(false);
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

  // Optimized search handler with debouncing
  const handleSearch = useCallback((value: string) => {
    const endTracking = trackOperation("search", "filter", {
      searchTerm: value,
    });

    try {
      setSearch(value);
      setPage(1);
    } finally {
      endTracking();
    }
  }, []);

  // Performance metrics reporting
  const getPerformanceReport = useCallback(() => {
    const metrics = metricsRef.current;
    const renderTimes = metrics
      .filter((m) => m.type === "render")
      .map((m) => m.duration!);
    const fetchTimes = metrics
      .filter((m) => m.type === "data-fetch")
      .map((m) => m.duration!);
    const filterTimes = metrics
      .filter((m) => m.type === "filter")
      .map((m) => m.duration!);

    const average = (arr: number[]) =>
      arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

    return {
      averageRenderTime: average(renderTimes),
      averageFetchTime: average(fetchTimes),
      averageFilterTime: average(filterTimes),
      slowOperations: metrics.filter((m) => m.duration! > 100),
      totalOperations: metrics.length,
    };
  }, []);

  // Log performance report in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const intervalId = setInterval(() => {
        console.debug("Performance Report:", getPerformanceReport());
      }, 10000);

      return () => clearInterval(intervalId);
    }
  }, [getPerformanceReport]);

  // Status Colors
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    in_review: "bg-blue-100 text-blue-800",
    approved: "bg-green-100 text-green-800",
    partially_approved: "bg-orange-100 text-orange-800",
    rejected: "bg-red-100 text-red-800",
  };

  // Status Badge Component
  const StatusBadge = ({ status }: { status: CheckInCheckInStatus }) => (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
    >
      {status.replace("_", " ")}
    </span>
  );

  // Columns Definition
  const columns: ColumnDef<CheckIn>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "checkNumber",
      header: "Check Number",
      cell: ({ row }) => (
        <Link
          href={`/admin/submissions/${row.original.$id}`}
          className="hover:underline"
          prefetch
        >
          #{row.getValue("checkNumber")}
        </Link>
      ),
    },
    {
      accessorKey: "fencerName",
      header: "Fencer Name",
      cell: ({ row }) => row.getValue("fencerName") || "Anonymous",
    },
    {
      accessorKey: "nationalityCode",
      header: "Nationality",
      cell: ({ row }) => row.getValue("nationalityCode") || "N/A",
    },
    {
      accessorKey: "weaponType",
      header: "Weapon",
    },
    {
      accessorKey: "CheckInStatus",
      header: "Status",
      cell: ({ row }) => <StatusBadge status={row.getValue("CheckInStatus")} />,
    },
    {
      accessorKey: "$createdAt",
      header: "Created At",
      cell: ({ row }) =>
        format(new Date(row.getValue("$createdAt")), "MMM dd, yyyy HH:mm"),
    },
  ];

  // Table Instance
  const table = useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  console.debug("Current Performance Metrics:", getPerformanceReport());

  // Render
  return (
    <div className="w-full">
      {/* Header Controls */}
      <div className="flex items-center py-4 space-x-2">
        {/* Search Input */}
        <Input
          placeholder="Search by fencer name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="max-w-sm"
        />

        {/* Status Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Status
              {selectedStatuses.length > 0 && ` (${selectedStatuses.length})`}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.values(CheckInCheckInStatus).map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={selectedStatuses.includes(status)}
                onCheckedChange={(checked) => {
                  console.log(checked);
                }}
              >
                {status.replace("_", " ")}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Bulk Delete Button */}
        {Object.keys(rowSelection).length > 0 && (
          <Button
            variant="destructive"
            onClick={() => setDeleteDialogOpen(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete ({Object.keys(rowSelection).length})
          </Button>
        )}
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Loading submissions...
                </TableCell>
              </TableRow>
            ) : data?.data?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No submissions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {Object.keys(rowSelection).length} of {data?.data?.length || 0} row(s)
          selected.
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span>Page {page}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!data?.data?.length || data.data.length < 20}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Selected Submissions?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete{" "}
              {Object.keys(rowSelection).length} submission(s) from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                const selectedIds = table
                  .getSelectedRowModel()
                  .rows.map((row) => row.original.$id);
                deleteSubmissionsMutation.mutate(selectedIds as string[]);
              }}
            >
              Confirm Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
