// src/app/(public)/public_tournament/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { databases } from "@/lib/appwrite/config";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Search, Tag, Loader2, Users, Sword } from "lucide-react";
import { cn } from "@/lib/utils";
import { COLLECTION_IDS, DATABASE_IDS } from "@/lib/appwrite/types";

interface Tournament {
  $id: string;
  name: string;
  date: string;
  location?: string;
  participants?: number;
  status: "upcoming" | "active" | "completed";
  activeWeapons?: string[];
}

export default function PublicTournamentPage() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_IDS.CHECKING_SYSTEM!,
          COLLECTION_IDS.TOURNAMENTS!
        );
        setTournaments(response.documents as unknown as Tournament[]);
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  const filteredTournaments = tournaments.filter((tournament) =>
    tournament.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: Tournament["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500/10 text-blue-500";
      case "active":
        return "bg-green-500/10 text-green-500";
      case "completed":
        return "bg-gray-500/10 text-gray-500";
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-7xl items-center">
          <div className="flex items-center space-x-2 pl-10">
            <Sword className="h-6 w-6" />
            <span className="font-semibold">Tournaments</span>
          </div>
        </div>
      </header>
      <div className="container max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* Search Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <h1 className="text-2xl font-bold">Available Tournaments</h1>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tournaments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full md:w-[300px]"
            />
          </div>
        </div>

        {/* Tournaments Grid */}
        {filteredTournaments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tournaments found</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.$id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span className="truncate">{tournament.name}</span>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        getStatusColor(tournament.status)
                      )}
                    >
                      {tournament.status}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {new Date(tournament.date).toLocaleDateString()}
                      </div>
                      {tournament.participants && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {tournament.participants}
                        </div>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Weapons */}
                  {tournament.activeWeapons &&
                    tournament.activeWeapons.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tournament.activeWeapons.map((weapon) => (
                          <span
                            key={weapon}
                            className="flex items-center px-2 py-1 rounded-full bg-muted text-xs"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {weapon}
                          </span>
                        ))}
                      </div>
                    )}

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2">
                    <Button asChild className="w-full">
                      <Link
                        href={`/public_tournament/${tournament.$id}/equipment-submission`}
                      >
                        Equipment Check-In
                      </Link>
                    </Button>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" asChild>
                        <Link
                          href={`/public_tournament/${tournament.$id}/submissions`}
                        >
                          List
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link
                          href={`/public_tournament/${tournament.$id}/display-board`}
                        >
                          Display
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
