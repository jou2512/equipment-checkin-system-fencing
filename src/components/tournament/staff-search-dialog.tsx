import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { databases } from "@/lib/appwrite/config";
import { Query } from "appwrite";
import { DATABASE_IDS, COLLECTION_IDS } from "@/lib/appwrite/types";
import { toast } from "@/hooks/use-toast";

type SearchResult = {
  $id: string;
  checkNumber: string;
  fencerName: string;
  nationalityCode: string;
  weaponType: string;
  CheckInStatus: string;
};

type StaffSearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (result: SearchResult) => void;
  currentTournamentId: string;
};

export function StaffSearchDialog({
  isOpen,
  onClose,
  onSelectResult,
  currentTournamentId,
}: StaffSearchDialogProps) {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = async (searchCriteria: {
    checkNumber?: number;
    fencerName?: string;
    nationalityCode?: string;
  }) => {
    setIsSearching(true);
    try {
      const queries = [
        Query.equal("tournaments", currentTournamentId),
        ...(searchCriteria.checkNumber
          ? [Query.equal("checkNumber", searchCriteria.checkNumber)]
          : []),
        ...(searchCriteria.fencerName
          ? [Query.search("fencerName", searchCriteria.fencerName)]
          : []),
        ...(searchCriteria.nationalityCode
          ? [Query.equal("nationalityCode", searchCriteria.nationalityCode)]
          : []),
      ];

      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.CHECKINS,
        queries
      );

      setSearchResults(response.documents as unknown as SearchResult[]);
    } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Search Failed",
    //     description: error.message
    //   });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search Previous Check-ins</DialogTitle>
          <DialogDescription>
            Enter a check number, fencer name, or nationality code to search.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="checkNumber" className="text-right">
              Check #
            </Label>
            <Input
              id="checkNumber"
                          className="col-span-3"
                          type="number"
              onChange={(e) => performSearch({ checkNumber: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fencerName" className="text-right">
              Name
            </Label>
            <Input
              id="fencerName"
              className="col-span-3"
              onChange={(e) => performSearch({ fencerName: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nationalityCode" className="text-right">
              Nationality
            </Label>
            <Input
              id="nationalityCode"
              className="col-span-3"
              maxLength={3}
              onChange={(e) =>
                performSearch({
                  nationalityCode: e.target.value.toUpperCase(),
                })
              }
            />
          </div>
        </div>
        {isSearching ? (
          <div className="text-center">Searching...</div>
        ) : (
          <ScrollArea className="h-[200px]">
            {searchResults.map((result) => (
              <div
                key={result.$id}
                className="p-2 hover:bg-accent rounded-lg cursor-pointer"
                onClick={() => onSelectResult(result)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">#{result.checkNumber}</span>
                  <Badge
                    variant={
                      result.CheckInStatus === "COMPLETED"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {result.CheckInStatus}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {result.fencerName} ({result.nationalityCode}) -{" "}
                  {result.weaponType}
                </div>
              </div>
            ))}
            {searchResults.length === 0 && (
              <div className="text-center text-muted-foreground">
                No results found
              </div>
            )}
          </ScrollArea>
        )}
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
