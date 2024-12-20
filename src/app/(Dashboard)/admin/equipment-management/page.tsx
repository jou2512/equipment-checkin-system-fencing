"use client";

import { useState } from "react";
import {
  EquipmentType,
  EquipmentPart,
  EquipmentPartDefect,
} from "@/lib/appwrite/types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Edit, Trash2, Plus } from "lucide-react";
import { useEquipment } from "@/hooks/use-equipment-management";

export default function EquipmentManagementPage() {
  const {
    equipmentTypes,
    equipmentParts,
    equipmentDefects,
    addEquipmentType,
    addEquipmentPart,
    addEquipmentDefect,
    updateEquipmentPart,
    updateEquipmentDefect,
    deleteEquipmentType,
    deleteEquipmentPart,
    deleteEquipmentDefect,
    isLoadingTypes,
    isLoadingParts,
    isLoadingDefects,
  } = useEquipment();

  console.log(equipmentParts);

  const [activeTab, setActiveTab] = useState<"types" | "parts" | "defects">(
    "types"
  );

  // Modals and forms state
  const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
  const [isPartModalOpen, setIsPartModalOpen] = useState(false);
  const [isDefectModalOpen, setIsDefectModalOpen] = useState(false);
  const [editingType, setEditingType] = useState<EquipmentType | null>(null);
  const [editingPart, setEditingPart] = useState<EquipmentPart | null>(null);
  const [editingDefect, setEditingDefect] =
    useState<EquipmentPartDefect | null>(null);
  const [deletePartId, setDeletePartId] = useState<string | null>(null);
  const [deleteDefectId, setDeleteDefectId] = useState<string | null>(null);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<
    string | null
  >(null);

  // Form state
  const [newType, setNewType] = useState({
    name: "",
    category: "weapon",
  });

  const [newPart, setNewPart] = useState({
    name: "",
    description: "",
    equipmentTypeId: "",
    parentPartId: "",
  });

  const [newDefect, setNewDefect] = useState({
    name: "",
    description: "",
    severity: "medium",
    applicablePartIds: [] as string[],
  });

  const handleCreateType = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      addEquipmentType.mutate(
        {
          name: newType.name,
          category: newType.category,
        },
        {
          onSuccess: () => {
            setIsTypeModalOpen(false);
            setNewType({ name: "", category: "weapon" });
          },
        }
      );
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to create equipment type",
      });
    }
  };

  const handleCreatePart = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      addEquipmentPart.mutate(
        {
          name: newPart.name,
          description: newPart.description || undefined,
          equipmentTypeId: newPart.equipmentTypeId,
          parentPartId: newPart.parentPartId || undefined,
        },
        {
          onSuccess: () => {
            setIsPartModalOpen(false);
            setNewPart({
              name: "",
              description: "",
              equipmentTypeId: "",
              parentPartId: "",
            });
          },
        }
      );
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to create equipment part",
      });
    }
  };

  const handleCreateDefect = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      addEquipmentDefect.mutate(
        {
          name: newDefect.name,
          description: newDefect.description || undefined,
          severity: newDefect.severity,
          applicablePartIds: newDefect.applicablePartIds,
        },
        {
          onSuccess: () => {
            setIsDefectModalOpen(false);
            setNewDefect({
              name: "",
              description: "",
              severity: "medium",
              applicablePartIds: [],
            });
          },
        }
      );
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to create equipment defect",
      });
    }
  };

  const handleUpdatePart = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingPart) return;

    updateEquipmentPart.mutate(
      {
        partId: editingPart.$id as string,
        updates: {
          name: newPart.name,
          description: newPart.description || undefined,
          equipmentTypeId: newPart.equipmentTypeId,
          parentPartId: newPart.parentPartId || undefined,
        },
      },
      {
        onSuccess: () => {
          setIsPartModalOpen(false);
          setEditingPart(null);
          setNewPart({
            name: "",
            description: "",
            equipmentTypeId: "",
            parentPartId: "",
          });
        },
      }
    );
  };

  const handleUpdateDefect = (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingDefect) return;

    try {
      updateEquipmentDefect.mutate(
        {
          defectId: editingDefect.$id as string,
          updates: {
            name: newDefect.name,
            description: newDefect.description || undefined,
            severity: newDefect.severity,
            applicablePartIds: newDefect.applicablePartIds,
          },
        },
        {
          onSuccess: () => {
            setIsDefectModalOpen(false);
            setEditingDefect(null);
            setNewDefect({
              name: "",
              description: "",
              severity: "medium",
              applicablePartIds: [],
            });
          },
        }
      );
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to update equipment defect",
      });
    }
  };

  const handleDeleteType = () => {
    if (deleteConfirmationId) {
      deleteEquipmentType.mutate(deleteConfirmationId);
      setDeleteConfirmationId(null);
    }
  };

  const renderEquipmentTypes = () => {
    if (isLoadingTypes) return <div>Loading equipment types...</div>;

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {equipmentTypes.map((type) => (
          <Card key={type.$id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{type.name}</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingType(type);
                    setNewType({
                      name: type.name,
                      category: type.category,
                    });
                    setIsTypeModalOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setDeleteConfirmationId(type.$id as string)
                      }
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete the equipment type. This
                        action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteType}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Category: {type.category}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Parts: {type.partIds?.length || 0}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderEquipmentParts = () => {
    if (isLoadingParts) return <div>Loading equipment parts...</div>;

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {equipmentParts.map((part) => (
          <Card key={part.$id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{part.name}</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingPart(part);
                    setNewPart({
                      name: part.name,
                      description: part.description || "",
                      equipmentTypeId:
                        (part.equipmentTypeId as EquipmentType)?.$id || "",
                      parentPartId: part.parentPartId || "",
                    });
                    setIsPartModalOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDeletePartId(part.$id as string)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete the equipment part. This
                        action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          if (deletePartId) {
                            deleteEquipmentPart.mutate(deletePartId);
                            setDeletePartId(null);
                          }
                        }}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Description: {part.description || "No description"}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Equipment Type:{" "}
                {typeof part.equipmentTypeId === "object"
                  ? (part.equipmentTypeId as EquipmentType).name
                  : "Not assigned"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderEquipmentDefects = () => {
    if (isLoadingDefects) return <div>Loading equipment defects...</div>;

    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {equipmentDefects.map((defect) => (
          <Card key={defect.$id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {defect.name}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingDefect(defect);
                    setNewDefect({
                      name: defect.name,
                      description: defect.description || "",
                      severity: defect.severity as string,
                      applicablePartIds:
                        (defect.applicablePartIds as string[]) || [],
                    });
                    setIsDefectModalOpen(true);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDeleteDefectId(defect.$id as string)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete the equipment defect. This
                        action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          if (deleteDefectId) {
                            deleteEquipmentDefect.mutate(deleteDefectId);
                            setDeleteDefectId(null);
                          }
                        }}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Description: {defect.description || "No description"}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Severity: {defect.severity}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Applicable Parts: {defect.applicablePartIds?.length || 0}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Equipment Management</h1>

      <Tabs
        value={activeTab}
        onValueChange={(tab) =>
          setActiveTab(tab as "types" | "parts" | "defects")
        }
      >
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="types">Equipment Types</TabsTrigger>
          <TabsTrigger value="parts">Equipment Parts</TabsTrigger>
          <TabsTrigger value="defects">Equipment Defects</TabsTrigger>
        </TabsList>

        <div className="flex justify-end mb-4">
          <Button
            onClick={() => {
              switch (activeTab) {
                case "types":
                  setIsTypeModalOpen(true);
                  break;
                case "parts":
                  setIsPartModalOpen(true);
                  break;
                case "defects":
                  setIsDefectModalOpen(true);
                  break;
              }
            }}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </div>

        <TabsContent value="types">{renderEquipmentTypes()}</TabsContent>
        <TabsContent value="parts">{renderEquipmentParts()}</TabsContent>
        <TabsContent value="defects">{renderEquipmentDefects()}</TabsContent>
      </Tabs>

      {/* Equipment Type Modal */}
      <Dialog open={isTypeModalOpen} onOpenChange={setIsTypeModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingType ? "Edit Equipment Type" : "Create Equipment Type"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateType} className="space-y-4">
            <div>
              <Label htmlFor="typeName">Name</Label>
              <Input
                id="typeName"
                value={newType.name}
                onChange={(e) =>
                  setNewType((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="typeCategory">Category</Label>
              <Select
                value={newType.category}
                onValueChange={(value) =>
                  setNewType((prev) => ({ ...prev, category: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weapon">Weapon</SelectItem>
                  <SelectItem value="protective-gear">
                    Protective Gear
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">{editingType ? "Update" : "Create"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Equipment Part Modal */}
      <Dialog open={isPartModalOpen} onOpenChange={setIsPartModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingPart ? "Edit Equipment Part" : "Create Equipment Part"}
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={editingPart ? handleUpdatePart : handleCreatePart}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="partName">Name</Label>
              <Input
                id="partName"
                value={newPart.name}
                onChange={(e) =>
                  setNewPart((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                placeholder="Enter part name"
              />
            </div>
            <div>
              <Label htmlFor="partDescription">Description (Optional)</Label>
              <Textarea
                id="partDescription"
                value={newPart.description}
                onChange={(e) =>
                  setNewPart((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Provide additional details about the part"
              />
            </div>
            <div>
              <Label>Equipment Type</Label>
              <Select
                value={newPart.equipmentTypeId}
                onValueChange={(value) =>
                  setNewPart((prev) => ({ ...prev, equipmentTypeId: value }))
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select equipment type" />
                </SelectTrigger>
                <SelectContent>
                  {equipmentTypes.map((type) => (
                    <SelectItem key={type.$id} value={type.$id || ""}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Parent Part (Optional)</Label>
              <Select
                value={newPart.parentPartId}
                onValueChange={(value) =>
                  setNewPart((prev) => ({ ...prev, parentPartId: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select parent part" />
                </SelectTrigger>
                <SelectContent>
                  {equipmentParts
                    .filter((part) => part.$id !== editingPart?.$id) // Prevent selecting self as parent
                    .map((part) => (
                      <SelectItem key={part.$id} value={part.$id || ""}>
                        {part.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditingPart(null);
                    setNewPart({
                      name: "",
                      description: "",
                      equipmentTypeId: "",
                      parentPartId: "",
                    });
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                {editingPart ? "Update Part" : "Create Part"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Equipment Defect Modal */}
      <Dialog open={isDefectModalOpen} onOpenChange={setIsDefectModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingDefect
                ? "Edit Equipment Defect"
                : "Create Equipment Defect"}
            </DialogTitle>
          </DialogHeader>
          <form
            onSubmit={editingDefect ? handleUpdateDefect : handleCreateDefect}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="defectName">Name</Label>
              <Input
                id="defectName"
                value={newDefect.name}
                onChange={(e) =>
                  setNewDefect((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                placeholder="Enter defect name"
              />
            </div>
            <div>
              <Label htmlFor="defectDescription">Description (Optional)</Label>
              <Textarea
                id="defectDescription"
                value={newDefect.description}
                onChange={(e) =>
                  setNewDefect((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Provide details about the defect"
              />
            </div>
            <div>
              <Label>Severity</Label>
              <Select
                value={newDefect.severity}
                onValueChange={(value: "low" | "medium" | "high") =>
                  setNewDefect((prev) => ({ ...prev, severity: value }))
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Applicable Parts</Label>
              <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded p-2">
                {equipmentParts.map((part) => (
                  <div key={part.$id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`part-${part.$id}`}
                      checked={newDefect.applicablePartIds.includes(
                        part.$id || ""
                      )}
                      onCheckedChange={(checked) => {
                        setNewDefect((prev) => {
                          const partId = part.$id || "";
                          return {
                            ...prev,
                            applicablePartIds: checked
                              ? [...prev.applicablePartIds, partId]
                              : prev.applicablePartIds.filter(
                                  (id) => id !== partId
                                ),
                          };
                        });
                      }}
                    />
                    <Label
                      htmlFor={`part-${part.$id}`}
                      className="text-sm font-normal"
                    >
                      {part.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setEditingDefect(null);
                    setNewDefect({
                      name: "",
                      description: "",
                      severity: "medium",
                      applicablePartIds: [],
                    });
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                {editingDefect ? "Update Defect" : "Create Defect"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
