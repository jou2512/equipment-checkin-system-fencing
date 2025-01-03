"use client";

import { use, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Clock,
  Edit,
  Eye,
  EyeOff,
  FileStack,
  Flag,
  RotateCcw,
  Save,
  SquareSplitHorizontal,
  Swords,
  X,
} from "lucide-react";
import { useSubmissions } from "@/hooks/use-submissions";
import { CheckInUpdate, useCheckIns } from "@/hooks/use-checkIn";
import { useParams } from "next/navigation";
import {
  CheckIn,
  CheckInCheckInStatus,
  CheckInCheckInStatusType,
  Checkinitem,
  CheckinitemStatus,
  ItemConfig,
  Tournament,
  TournamentActiveWeapons,
} from "@/lib/appwrite/types";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTournaments } from "@/hooks/use-tournaments";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import IconPicker from "@/components/cards/IconPicker";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

export default function SubmissionDetailsPage() {
  const params = useParams<{ checkInId: string }>();
  const [activeTab, setActiveTab] = useState("current");
  const [selectedVersions, setSelectedVersions] = useState<string[]>([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedCheckIn, setEditedCheckIn] = useState<CheckInUpdate>({});

  const [showId, setShowId] = useState(false);
  const toggleShowId = () => setShowId((prev) => !prev);

  const { getSubmissions, getSubmissionVersion, compareVersions } =
    useSubmissions();

  const { getCheckIn, updateCheckIn, updateCheckInStatus } = useCheckIns();

  const { SelectedTournament, Weapons } = useTournaments();
  const { tournament: currentTournament, isLoading: isLoadingTournament } =
    SelectedTournament();
  const weapons = Weapons(currentTournament);

  // Fetch current check-in details
  const {
    data: currentCheckIn,
    isLoading: isCheckInLoading,
    refetch: refetchCheckIn,
  } = getCheckIn(params?.checkInId as string);

  // Fetch submission versions
  const { data: submissions, isLoading: isSubmissionsLoading } = getSubmissions(
    params?.checkInId as string
  );

  // Initialize editing state when check-in loads
  useEffect(() => {
    if (currentCheckIn) {
      setEditedCheckIn({
        fencerName: currentCheckIn.fencerName,
        nationalityCode: currentCheckIn.nationalityCode,
      });
    }
  }, [currentCheckIn]);

  // Save edited check-in
  const handleSave = async () => {
    try {
      console.log(editedCheckIn);
      await updateCheckIn.mutateAsync({
        checkInId: params?.checkInId as string,
        updates: editedCheckIn,
      });

      setIsEditing(false);
      refetchCheckIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    if (currentCheckIn) {
      setEditedCheckIn({
        fencerName: currentCheckIn.fencerName ?? undefined,
        nationalityCode: currentCheckIn.nationalityCode ?? undefined,
        weaponType: currentCheckIn.weaponType as TournamentActiveWeapons,
        itemChecks: (currentCheckIn.itemChecks as Checkinitem[])?.map(
          (item) => ({
            $id: item.$id as string,
            itemName: item.itemName,
            quantity: item.quantity,
            status: item.status as CheckinitemStatus,
          })
        ),
        CheckInStatus: currentCheckIn.CheckInStatus as CheckinitemStatus,
        pickupConfirmed: currentCheckIn.pickupConfirmed,
      });
      setIsEditing(true);
      setActiveTab("current");
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditedCheckIn({
      fencerName: currentCheckIn?.fencerName,
      nationalityCode: currentCheckIn?.nationalityCode,
    });
    setIsEditing(false);
  };

  const handleInputChange = (
    field: keyof CheckIn,
    value: string | number | boolean
  ) => {
    // Special handling for specific fields
    const processedValue = (() => {
      switch (field) {
        case "nationalityCode":
          return typeof value === "string"
            ? value.toUpperCase().slice(0, 3)
            : value;
        case "fencerName":
          return typeof value === "string" ? value.slice(0, 64) : value;
        case "weaponType":
          return typeof value === "string" ? value.slice(0, 10) : value;
        default:
          return value;
      }
    })();

    setEditedCheckIn((prev) => ({
      ...prev,
      [field]: processedValue || undefined,
    }));
  };

  // Version selection handler
  const handleVersionSelect = (versionId: string) => {
    setSelectedVersions((prev) =>
      prev.includes(versionId)
        ? prev.filter((id) => id !== versionId)
        : [...prev, versionId].slice(-2)
    );
  };

  // Dictionary to map item names to icons
  // const iconMap: Record<string, React.ElementType> = {
  //   yes: CheckCircle,
  //   no: XCircle,
  //   warning: AlertCircle,
  //   info: Info,
  //   // Add more mappings as needed
  // };

  // Function to get the icon component based on the item name
  const getIcon = (name: string) => {
    //
  };

  const handleSelectIcon = (iconName: keyof typeof dynamicIconImports) => {
    console.log("Selected icon:", iconName);
    // You can then use the icon name with dynamic imports
    const IconComponent = dynamic(dynamicIconImports[iconName]);
  };

  // First, create the update function
  const handleStatusUpdate = async (newStatus: CheckInCheckInStatusType) => {
    if (!currentCheckIn?.$id) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: "No check-in selected",
      });
      return;
    }

    try {
      await updateCheckInStatus.mutateAsync({
        checkInId: currentCheckIn.$id,
        status: newStatus,
      });

      // Refetch after successful update
      refetchCheckIn();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description:
          error instanceof Error ? error.message : "Failed to update status",
      });
    }
  };

  // Render version differences
  const renderVersionDifferences = () => {
    if (selectedVersions.length !== 2) return null;

    const [version1Id, version2Id] = selectedVersions;
    const { data: version1 } = getSubmissionVersion(version1Id);
    const { data: version2 } = getSubmissionVersion(version2Id);

    if (!version1 || !version2) return null;

    const differences = compareVersions(version1, version2);

    return (
      <Card>
        <CardHeader>
          <CardTitle>Version Differences</CardTitle>
        </CardHeader>
        <CardContent>
          {differences.map((diff, index) => (
            <div key={index} className="mb-2 p-2 border rounded">
              <div className="font-bold">{diff.field}</div>
              <div className="text-sm text-muted-foreground">
                Old: {JSON.stringify(diff.oldValue)}
              </div>
              <div className="text-sm text-primary">
                New: {JSON.stringify(diff.newValue)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };

  // Loading state
  if (isCheckInLoading || isSubmissionsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Submission Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-2xl">
                {currentCheckIn?.fencerName
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">
                {currentCheckIn?.fencerName}
              </h2>
              <div className="flex space-x-2 mt-1">
                <Badge variant="outline" className="flex items-center">
                  <Flag className="mr-1 h-3 w-3" />
                  {currentCheckIn?.nationalityCode}
                </Badge>
                <Badge variant="secondary" className="flex items-center">
                  <Swords className="mr-1 h-3 w-3" />
                  {currentCheckIn?.weaponType}
                </Badge>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-end">
              {" "}
              <div>
                {" "}
                <p className="text-md text-muted-foreground">
                  Submission ID
                </p>{" "}
                <p className="font-medium text-lg">
                  {" "}
                  {showId
                    ? currentCheckIn?.$id
                    : "#" + currentCheckIn?.checkNumber}{" "}
                </p>{" "}
              </div>{" "}
              <button onClick={toggleShowId} className="ml-2 pb-1">
                {" "}
                {showId ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}{" "}
              </button>{" "}
            </div>
            <div>
              <p className="text-md text-muted-foreground">Status</p>
              <Select
                value={currentCheckIn?.CheckInStatus}
                onValueChange={handleStatusUpdate}
              >
                <SelectTrigger className="w-auto border-none shadow-none">
                  <SelectValue>
                    <Badge
                      variant={currentCheckIn?.CheckInStatus}
                      className="text-md mr-3"
                    >
                      {currentCheckIn?.CheckInStatus}
                    </Badge>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {Object.values(CheckInCheckInStatus).map((status) => (
                    <SelectItem key={status} value={status}>
                      <Badge variant={status} className="text-md">
                        {status}
                      </Badge>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Submission Date</p>
              <p className="font-medium">
                {new Date(
                  currentCheckIn?.$createdAt as string
                ).toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold truncate">
          Submission Details: #{currentCheckIn?.checkNumber}
        </h1>
        {!isEditing ? (
          <Button variant="outline" onClick={handleEdit}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Submission
          </Button>
        ) : (
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleCancelEdit}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        )}
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          isEditing && setIsEditing(false);
          setActiveTab(value);
        }}
        className="space-y-4 "
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current">
            <FileStack className="mr-2 h-4 w-4" />
            Submitted Items
          </TabsTrigger>
          <TabsTrigger value="history">
            <Clock className="mr-2 h-4 w-4" />
            Version History
          </TabsTrigger>
          <TabsTrigger value="compare">
            <SquareSplitHorizontal className="mr-2 h-4 w-4" />
            Version Comparison
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <Card>
            <CardHeader>
              <CardTitle>
                {isEditing ? "Edit the Submission" : "Submitted Items"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Fencer Name</Label>
                    <Input
                      value={editedCheckIn.fencerName || ""}
                      onChange={(e) =>
                        handleInputChange("fencerName", e.target.value)
                      }
                      placeholder="Enter fencer's name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Nationality Code</Label>
                    <Input
                      value={editedCheckIn.nationalityCode || ""}
                      onChange={(e) =>
                        handleInputChange("nationalityCode", e.target.value)
                      }
                      maxLength={3}
                      placeholder="e.g., USA, GER"
                    />
                  </div>
                  {weapons.hasMultiple && (
                    <div className="space-y-2">
                      <Label>Weapon Type</Label>
                      <Select
                        value={editedCheckIn.weaponType}
                        onValueChange={(value) =>
                          handleInputChange("weaponType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Weapon" />
                        </SelectTrigger>
                        <SelectContent>
                          {weapons.weapons.map((weapon) => (
                            <SelectItem key={weapon} value={weapon}>
                              {weapon.charAt(0).toUpperCase() + weapon.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  <div className="space-y-4">
                    <Label>Equipment</Label>
                    {(currentCheckIn?.itemChecks as Checkinitem[])?.map(
                      (item) => (
                        <div
                          key={item.$id}
                          className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 p-4 border rounded-lg"
                        >
                          <div className="flex-grow">
                            <h3 className="font-medium">{item.itemName}</h3>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="grid grid-cols-5 gap-1">
                              {[
                                ...Array(
                                  ((
                                    currentTournament?.itemConfigs as ItemConfig[]
                                  )?.find(
                                    (config) =>
                                      (config as ItemConfig).itemName ===
                                      item.itemName
                                  )?.maxQuantity ?? 0) + 1
                                ),
                              ].map((_, index) => (
                                <Button
                                  key={`${item.$id}_${index}`}
                                  size="lg"
                                  variant={
                                    (editedCheckIn.itemChecks?.find(
                                      (editItem) =>
                                        editItem.itemName === item.itemName
                                    )?.quantity || 0) === index
                                      ? "default"
                                      : "outline"
                                  }
                                  className={`w-10 h-10 p-0 ${
                                    item.quantity === index &&
                                    !(
                                      editedCheckIn.itemChecks?.find(
                                        (editItem) =>
                                          editItem.itemName === item.itemName
                                      )?.quantity === index
                                    )
                                      ? "bg-green-300 text-black hover:bg-green-200"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    const updatedItemChecks =
                                      editedCheckIn.itemChecks
                                        ? [...editedCheckIn.itemChecks]
                                        : (
                                            currentCheckIn?.itemChecks as Checkinitem[]
                                          )?.map((i) => ({
                                            $id: i.$id,
                                            itemName: i.itemName,
                                            quantity: i.quantity,
                                            status:
                                              i.status ||
                                              CheckinitemStatus.PENDING,
                                          })) || [];

                                    const existingItemIndex =
                                      updatedItemChecks.findIndex(
                                        (editItem) =>
                                          editItem.itemName === item.itemName
                                      );

                                    if (existingItemIndex !== -1) {
                                      updatedItemChecks[existingItemIndex] = {
                                        ...updatedItemChecks[existingItemIndex],
                                        quantity: index,
                                        status: CheckinitemStatus.PENDING,
                                      };
                                    } else {
                                      updatedItemChecks.push({
                                        $id: item.$id || "",
                                        itemName: item.itemName,
                                        quantity: index,
                                        status: CheckinitemStatus.PENDING,
                                      });
                                    }

                                    setEditedCheckIn((prev) => {
                                      // Type assertion to match the exact type
                                      const updatedState: typeof prev = {
                                        ...prev,
                                        itemChecks: updatedItemChecks.map(
                                          (item) => ({
                                            $id: item.$id ?? "",
                                            itemName: item.itemName,
                                            quantity: item.quantity,
                                            status:
                                              (item.status as CheckinitemStatus) ??
                                              CheckinitemStatus.PENDING,
                                          })
                                        ),
                                      };

                                      return updatedState;
                                    });
                                  }}
                                >
                                  {index}
                                </Button>
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              Max:{" "}
                              {(
                                currentTournament?.itemConfigs as ItemConfig[]
                              )?.find(
                                (config) =>
                                  (config as ItemConfig).itemName ===
                                  item.itemName
                              )?.maxQuantity ?? 0}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(currentCheckIn?.itemChecks as Checkinitem[]).map((item) => (
                    <Card key={item.$id}>
                      <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                        <h3 className="font-semibold mt-2">{item.itemName}</h3>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity}
                        </p>
                        <Badge variant={item.status} className="mt-2">
                          {item.status}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Version History</CardTitle>
            </CardHeader>
            <CardContent>
              {submissions?.map((submission) => (
                <div
                  key={submission.$id}
                  className="flex justify-between items-center p-4 border-b"
                >
                  <div>
                    <div className="font-bold">
                      Version {submission.versionNumber}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(
                        submission.$createdAt as string
                      ).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant={
                        selectedVersions.includes(submission.$id as string)
                          ? "default"
                          : "outline"
                      }
                      size="sm"
                      onClick={() =>
                        handleVersionSelect(submission.$id as string)
                      }
                    >
                      Select for Comparison
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-yellow-600 border-yellow-600"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Restore
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compare">{renderVersionDifferences()}</TabsContent>
      </Tabs>
    </div>
  );
}
