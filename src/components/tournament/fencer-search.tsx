import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Models } from "node-appwrite";

type FencerSearchProps = {
  tournamentId: string;
  onSelect: (fencer: Models.User<Models.Preferences>) => void;
};

export function FencerSearch({ tournamentId, onSelect }: FencerSearchProps) {
  const [open, setOpen] = useState(false);
  const [fencers, setFencers] = useState<Models.User<Models.Preferences>[]>([]);
  const [selectedFencer, setSelectedFencer] =
    useState<Models.User<Models.Preferences> | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchFencers = async () => {
      try {
        const response = await fetch("/api/teams/adminMembers", {
          method: "POST",
          headers: {
            Authorization: "Bearer honoiscool",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ teamId: tournamentId }),
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.error || "Failed to fetch fencers");
        }
        setFencers(data.fencers);
      } catch (error) {
        console.error("Error fetching fencers:", error);
      }
    };

    fetchFencers();
  }, [tournamentId]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selectedFencer ? selectedFencer.name : "Select fencer..."}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Fencer</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Search fencers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="mt-4">
          {fencers
            .filter((fencer) =>
              fencer.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((fencer) => (
              <div
                key={fencer.$id}
                className={cn(
                  "flex items-center p-2 cursor-pointer",
                  selectedFencer?.$id === fencer.$id ? "bg-gray-200" : ""
                )}
                onClick={() => {
                  setSelectedFencer(fencer);
                  setOpen(false);
                  onSelect(fencer);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedFencer?.$id === fencer.$id
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {fencer.name} (
                {(fencer.prefs.nationalityCode as string).toUpperCase()})
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
