"use client";

import { QRCodeSVG } from "qrcode.react";
import {
  useTournamentInvites,
  TOURNAMENT_ROLES,
} from "@/hooks/use-tournament-invitations";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function TournamentCodeManager() {
  const { roleCodes, updateRoleCodes } = useTournamentInvites();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tournament Join Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Staff Code Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2">Staff Code</Badge>
                    <div className="font-mono text-2xl">
                      {roleCodes?.["checkin-staff"] || "No code generated"}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Share this code with your tournament staff members
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        copyToClipboard(roleCodes?.["checkin-staff"])
                      }
                      disabled={!roleCodes?.["checkin-staff"]}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateRoleCodes.mutate("checkin-staff")}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participant Code Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Badge className="mb-2">Participant Code</Badge>
                    <div className="font-mono text-2xl">
                      {roleCodes?.["participant"] || "No code generated"}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Share this code with tournament participants
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        copyToClipboard(roleCodes?.["participant"])
                      }
                      disabled={!roleCodes?.["participant"]}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateRoleCodes.mutate("participant")}
                    >
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* QR Code for the participant code */}
                {roleCodes?.["participant"] && (
                  <div className="mt-4 flex justify-center">
                    <QRCodeSVG
                      value={roleCodes["participant"]}
                      size={150}
                      level="M"
                      includeMargin
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Instructions */}
            <div className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>
                  • These codes can be used multiple times to join the
                  tournament
                </li>
                <li>
                  • Use the refresh button to generate new codes if needed
                </li>
                <li>
                  • Staff codes grant check-in and equipment management
                  permissions
                </li>
                <li>• Participant codes grant basic tournament access</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
