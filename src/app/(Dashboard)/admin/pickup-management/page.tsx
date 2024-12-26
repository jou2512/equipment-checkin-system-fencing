"use client";

import { useState } from 'react';
import { 
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable 
} from '@tanstack/react-table';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { databases } from '@/lib/appwrite/config';
import { Query } from 'appwrite';
import { 
  CheckIn, 
  CheckInCheckInStatus,
  DATABASE_IDS,
  COLLECTION_IDS 
} from '@/lib/appwrite/types';
import { useTournamentStore } from '@/lib/store/tournament-store';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { 
  ArrowUpRight, 
  Eye, 
  CheckCircle 
} from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';

const STATUS_COLORS = {
  'approved': 'bg-green-100 text-green-800',
  'partially_approved': 'bg-orange-100 text-orange-800',
  'rejected': 'bg-red-100 text-red-800'
};

export default function PickupManagementPage() {
  const queryClient = useQueryClient();
  const { currentTournamentId } = useTournamentStore();
  const [selectedSubmission, setSelectedSubmission] = useState<CheckIn | null>(null);
  const [pickupComment, setPickupComment] = useState('');

  // Fetch Ready Submissions
  const { data: submissions, isLoading } = useQuery<CheckIn[]>({
    queryKey: ['pickup-submissions', currentTournamentId],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        [
          Query.equal('tournaments', currentTournamentId as string),
          Query.contains('CheckInStatus', ['approved', 'partially_approved', 'rejected']),
          Query.equal('pickupConfirmed', false),
          Query.orderDesc('$createdAt'),
          Query.limit(300)
        ]
      );
      return response.documents as CheckIn[];
    },
    refetchInterval: 30000
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
          pickupComment: pickupComment
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['pickup-submissions', currentTournamentId]
      });
      setSelectedSubmission(null);
      setPickupComment('');
    }
  });

  // Table Columns
  const columns: ColumnDef<CheckIn>[] = [
    {
      accessorKey: "checkNumber",
      header: "Check Number",
      cell: ({ row }) => (
        <Link 
          href={`/admin/submissions/${row.original.$id}`}
          className="hover:underline flex items-center"
        >
          #{row.getValue("checkNumber")}
          <ArrowUpRight className="ml-2 h-4 w-4 text-muted-foreground" />
        </Link>
      ),
    },
    {
      accessorKey: "fencerName",
      header: "Fencer Name",
      cell: ({ row }) => row.getValue("fencerName") || 'Anonymous'
    },
    {
      accessorKey: "nationalityCode",
      header: "Nationality",
      cell: ({ row }) => row.getValue("nationalityCode") || 'N/A'
    },
    {
      accessorKey: "CheckInStatus",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("CheckInStatus");
        return (
          <span 
            className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[status]}`}
          >
            {status.replace('_', ' ')}
          </span>
        );
      }
    },
    {
      accessorKey: "$createdAt",
      header: "Submitted At",
      cell: ({ row }) => 
        format(new Date(row.getValue("$createdAt")), 'MMM dd, yyyy HH:mm')
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setSelectedSubmission(row.original)}
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Confirm Pickup
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={`/admin/submissions/${row.original.$id}`}>
                  <Button variant="outline" size="icon">
                    <Eye className="h-4 w-4" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                View Details
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ),
    }
  ];

  // Table Instance
  const table = useReactTable({
    data: submissions || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Pickup Management</h1>
      
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
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Loading submissions...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows.length ? (
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
                  No submissions ready for pickup
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pickup Confirmation Dialog */}
      {selectedSubmission && (
        <Dialog 
          open={!!selectedSubmission} 
          onOpenChange={() => setSelectedSubmission(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Confirm Pickup for Check #
                {selectedSubmission.checkNumber}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <strong>Fencer:</strong> 
                  {selectedSubmission.fencerName || 'Anonymous'}
                </div>
                <div>
                  <strong>Nationality:</strong> 
                  {selectedSubmission.nationalityCode || 'N/A'}
                </div>
              </div>
              <div>
                <strong>Submitted At:</strong> 
                {format(new Date(selectedSubmission.$createdAt), 'MMM dd, yyyy HH:mm')}
              </div>
              <Textarea
                placeholder="Optional pickup notes..."
                value={pickupComment}
                onChange={(e) => setPickupComment(e.target.value)}
              />
              <Button 
                onClick={() => confirmPickupMutation.mutate(selectedSubmission)}
                className="w-full"
              >
                Confirm Pickup
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}