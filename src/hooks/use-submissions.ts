import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { toast } from "@/hooks/use-toast";
import { 
  Submission, 
  CheckIn, 
  DATABASE_IDS, 
  COLLECTION_IDS 
} from "@/lib/appwrite/types";
import { ID, Query } from "appwrite";

export function useSubmissions() {
  const queryClient = useQueryClient();

  // Fetch submissions for a specific check-in
  const getSubmissions = (checkInId: string) => 
    useQuery<Submission[]>({
      queryKey: ["submissions", checkInId],
      queryFn: async () => {
        const response = await databases.listDocuments(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.SUBMISSIONS,
          [Query.equal("checkInDocument", checkInId)]
        );
        return response.documents as Submission[];
      },
      enabled: !!checkInId,
      staleTime: 5000
    });

  // Fetch a specific submission version
  const getSubmissionVersion = (submissionId: string) => 
    useQuery<Submission>({
      queryKey: ["submission", submissionId],
      queryFn: async () => {
        const response = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.SUBMISSIONS,
          submissionId
        );
        return response as Submission;
      },
      enabled: !!submissionId
    });

  // Create a new submission version
  const createSubmissionVersion = useMutation({
    mutationFn: async (submissionData: Omit<Submission, '$id' | '$createdAt' | '$updatetAt'>) => {
      return await databases.createDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.SUBMISSIONS,
        ID.unique(),
        submissionData
      );
    },
    onSuccess: (newSubmission, variables) => {
        // Invalidate related queries
        queryClient.invalidateQueries({ 
            queryKey: ["submissions", variables.checkInDocument as string] 
        });
        
        switch (variables.action) {
            case 'update':
            toast({
                title: "Version Updated",
                description: "A new version has been created with recent changes.",
                className: "bg-blue-100"
            });
            break;
            case 'revert':
            toast({
                title: "Version Reverted",
                description: "A previous version of the submission has been restored.",
                className: "bg-yellow-100"
            });
            break;
            // No toast for 'create' action
        }
    },
    onError: (error) => {
      toast({
        title: "Version Creation Failed",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive"
      });
    }
  });

  // Compare two submission versions
  const compareVersions = (version1: Submission, version2: Submission) => {
    // Parse snapshots to compare
    const snapshot1 = JSON.parse(version1.snapshotJson);
    const snapshot2 = JSON.parse(version2.snapshotJson);

    // Compute differences
    const differences: { field: string, oldValue: any, newValue: any }[] = [];
    
    Object.keys(snapshot1).forEach(key => {
      if (JSON.stringify(snapshot1[key]) !== JSON.stringify(snapshot2[key])) {
        differences.push({
          field: key,
          oldValue: snapshot1[key],
          newValue: snapshot2[key]
        });
      }
    });

    return differences;
  };

  return {
    getSubmissions,
    getSubmissionVersion,
    createSubmissionVersion,
    compareVersions
  };
}