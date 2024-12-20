import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { databases } from "@/lib/appwrite/config";
import { toast } from "@/hooks/use-toast";
import { 
  EquipmentType, 
  EquipmentPart, 
  EquipmentPartDefect,
  COLLECTION_IDS,
  DATABASE_IDS
} from "@/lib/appwrite/types";
import { ID, Query } from "appwrite";
import { z } from "zod";

// Validation Schemas
const EquipmentTypeSchema = z.object({
  name: z.string().min(1, "Name is required").max(64, "Name too long"),
  category: z.string().min(1, "Category is required").max(64, "Category too long"),
});

const EquipmentPartSchema = z.object({
  name: z.string().min(1, "Name is required").max(64, "Name too long"),
  description: z.string().max(256, "Description too long").optional(),
  parentPartId: z.string().optional(),
  equipmentTypeId: z.string().min(1, "Equipment type is required"),
});

const EquipmentDefectSchema = z.object({
  name: z.string().min(1, "Name is required").max(64, "Name too long"),
  description: z.string().max(256, "Description too long").optional(),
  severity: z.enum(["low", "medium", "high"]).default("medium"),
  applicablePartIds: z.array(z.string()).optional(),
});

export function useEquipment() {
  const queryClient = useQueryClient();

  // Fetch Equipment Types
  const {
    data: equipmentTypes = [],
    isLoading: isLoadingTypes,
    isError: isTypesError,
  } = useQuery<EquipmentType[]>({
    queryKey: ["equipmentTypes"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES
      );
      return response.documents as EquipmentType[];
    },
    staleTime: Infinity,
  });

  // Fetch Equipment Parts
  const {
    data: equipmentParts = [],
    isLoading: isLoadingParts,
    isError: isPartsError,
  } = useQuery<EquipmentPart[]>({
    queryKey: ["equipmentParts"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTPARTS
      );
      return response.documents as EquipmentPart[];
    },
    staleTime: Infinity,
  });

  // Fetch Equipment Defects
  const {
    data: equipmentDefects = [],
    isLoading: isLoadingDefects,
    isError: isDefectsError,
  } = useQuery<EquipmentPartDefect[]>({
    queryKey: ["equipmentDefects"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTPARTDEFECTS
      );
      return response.documents as EquipmentPartDefect[];
    },
    staleTime: Infinity,
  });

  // Add Equipment Type
  const addEquipmentType = useMutation({
    mutationFn: async (typeData: Omit<EquipmentType, '$id' | '$createdAt' | '$updatedAt'>) => {
      // Validate input
      const validatedData = EquipmentTypeSchema.parse(typeData);

      // Create document with name-based ID
      const documentId = validatedData.name.toLowerCase().replace(/\s+/g, '-');

      return await databases.createDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES,
        documentId,
        { ...validatedData, partIds: [] }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["equipmentTypes"] });
      toast({
        title: "Equipment Type Created",
        description: "New equipment type added successfully.",
      });
    },
    onError: (error) => {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors.map((e) => e.message).join(", "),
        });
      } else {
        console.error("Submission error:", error);
        toast({
          variant: "destructive",
          title: "Failed to Create Equipment Type",
          description: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
  });

  // Add Equipment Part
  const addEquipmentPart = useMutation({
    mutationFn: async (partData: Omit<EquipmentPart, '$id' | '$createdAt' | '$updatedAt'>) => {
      // Validate input
      const validatedData = EquipmentPartSchema.parse(partData);

      // Create document with unique ID
      const documentId = `${validatedData.name.toLowerCase().replace(/\s+/g, '-')}_${ID.unique()}`;

      // Create part document
      const newPart = await databases.createDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTPARTS,
        documentId,
        {
          ...validatedData,
          possibleDefectIds: []
        }
      );

      // Update equipment type's part list
      if (validatedData.equipmentTypeId) {
        const currentType = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.EQUIPMENTTYPES,
          validatedData.equipmentTypeId
        );

        await databases.updateDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.EQUIPMENTTYPES,
          validatedData.equipmentTypeId,
          {
            partIds: Array.from(new Set([
              ...(currentType.partIds || []), 
              newPart.$id
            ]))
          }
        );
      }

      return newPart;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["equipmentParts"] });
      queryClient.invalidateQueries({ queryKey: ["equipmentTypes"] });
      toast({
        title: "Equipment Part Created",
        description: "New equipment part added successfully.",
      });
    },
    onError: (error) => {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors.map((e) => e.message).join(", "),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to Create Equipment Part",
          description: error instanceof Error ? error.message : "Unknown error",
        });
      }

    }
  });

  // Add Equipment Defect
  const addEquipmentDefect = useMutation({
    mutationFn: async (defectData: Omit<EquipmentPartDefect, '$id' | '$createdAt' | '$updatedAt'>) => {
      // Validate input
      const validatedData = EquipmentDefectSchema.parse(defectData);

      return await databases.createDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTPARTDEFECTS,
        ID.unique(),
        validatedData
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["equipmentDefects"] });
      toast({
        title: "Equipment Defect Created",
        description: "New equipment defect added successfully.",
      });
    },
    onError: (error) => {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors.map((e) => e.message).join(", "),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to Create Equipment Defect",
          description: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
  });

  // Update Equipment Type
  const updateEquipmentType = useMutation({
    mutationFn: async ({ 
      typeId, 
      updates 
    }: { 
      typeId: string; 
      updates: Partial<Omit<EquipmentType, '$id' | '$createdAt' | '$updatedAt'>> 
    }) => {
      // Validate input
      const validatedUpdates = EquipmentTypeSchema.partial().parse(updates);

      return await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES,
        typeId,
        validatedUpdates
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["equipmentTypes"] });
      toast({
        title: "Equipment Type Updated",
        description: "Equipment type updated successfully.",
      });
    },
    onError: (error) => {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors.map((e) => e.message).join(", "),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to Update Equipment Type",
          description: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }
  });

  // Update Equipment Part
const updateEquipmentPart = useMutation({
  mutationFn: async ({ 
    partId, 
    updates 
  }: { 
    partId: string; 
    updates: Partial<Omit<EquipmentPart, '$id' | '$createdAt' | '$updatedAt'>> 
  }) => {
    // Validate input
    const validatedUpdates = EquipmentPartSchema.partial().parse(updates);

    console.log(validatedUpdates)
    console.log(updates)

    // If changing equipment type, update type's part lists
    if (validatedUpdates.equipmentTypeId) {
      // Remove part from old type
      const oldPart = await databases.getDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTPARTS,
        partId
      );

      console.log(oldPart)

      if (oldPart.equipmentTypeId.$id) {
        const oldType = await databases.getDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.EQUIPMENTTYPES,
          oldPart.equipmentTypeId.$id
        );
          console.log(oldType)
        // Remove part from old type
        await databases.updateDocument(
          DATABASE_IDS.CHECKING_SYSTEM,
          COLLECTION_IDS.EQUIPMENTTYPES,
          oldPart.equipmentTypeId.$id,
          {
            partIds: (oldType.partIds || []).filter((id: string) => id !== partId)
          }
        );
      }

      // Add part to new type
      const newType = await databases.getDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES,
        validatedUpdates.equipmentTypeId
      );

      console.log(newType)

      await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES,
        validatedUpdates.equipmentTypeId,
        {
          partIds: Array.from(new Set([
            ...(newType.partIds || []), 
            partId
          ]))
        }
      );
    }

    // Update part document
    return await databases.updateDocument(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.EQUIPMENTPARTS,
      partId,
      validatedUpdates
    );
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["equipmentParts"] });
    queryClient.invalidateQueries({ queryKey: ["equipmentTypes"] });
    toast({
      title: "Equipment Part Updated",
      description: "Equipment part updated successfully.",
    });
  },
  onError: (error) => {
    if (error instanceof z.ZodError) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: error.errors.map((e) => e.message).join(", "),
      });
    } else {
      toast({
        variant: "destructive",
        title: "Failed to Update Equipment Part",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
});
  
  // Update Equipment Defect
const updateEquipmentDefect = useMutation({
  mutationFn: async ({ 
    defectId, 
    updates 
  }: { 
    defectId: string; 
    updates: Partial<Omit<EquipmentPartDefect, '$id' | '$createdAt' | '$updatedAt'>> 
  }) => {
    // Validate input
    const validatedUpdates = EquipmentDefectSchema.partial().parse(updates);

    return await databases.updateDocument(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.EQUIPMENTPARTDEFECTS,
      defectId,
      validatedUpdates
    );
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["equipmentDefects"] });
    toast({
      title: "Equipment Defect Updated",
      description: "Equipment defect updated successfully.",
    });
  },
  onError: (error) => {
    if (error instanceof z.ZodError) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: error.errors.map((e) => e.message).join(", "),
      });
    } else {
      toast({
        variant: "destructive",
        title: "Failed to Update Equipment Defect",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
});

  // Delete Equipment Type
  const deleteEquipmentType = useMutation({
    mutationFn: async (typeId: string) => {
      // First, check if type has any parts
      const parts = equipmentParts.filter(part => (part.equipmentTypeId as EquipmentType)?.$id === typeId);
      
      if (parts.length > 0) {
        throw new Error("Cannot delete equipment type with existing parts");
      }

      return await databases.deleteDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES,
        typeId
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["equipmentTypes"] });
      toast({
        title: "Equipment Type Deleted",
        description: "Equipment type deleted successfully.",
      });
    },
    onError: (error) => {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Validation Error",
          description: error.errors.map((e) => e.message).join(", "),
        });
      } else {
        if (error instanceof z.ZodError) {
          toast({
            variant: "destructive",
            title: "Validation Error",
            description: error.errors.map((e) => e.message).join(", "),
          });
        } else {
          toast({
            variant: "destructive",
            title: "Failed to Delete Equipment Type",
            description: error instanceof Error ? error.message : "Unknown error",
          });
        }
      }
    }
  });

  // Delete Equipment Part
const deleteEquipmentPart = useMutation({
  mutationFn: async (partId: string) => {
    // Check if part is used in any defects
    const relatedDefects = equipmentDefects.filter(defect => 
      defect.applicablePartIds?.includes(partId)
    );

    if (relatedDefects.length > 0) {
      throw new Error("Cannot delete part used in equipment defects");
    }

    // Remove part from its equipment type
    const part = await databases.getDocument(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.EQUIPMENTPARTS,
      partId
    );

    if (part.equipmentTypeId) {
      const type = await databases.getDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES,
        part.equipmentTypeId
      );

      await databases.updateDocument(
        DATABASE_IDS.CHECKING_SYSTEM,
        COLLECTION_IDS.EQUIPMENTTYPES,
        part.equipmentTypeId,
        {
          partIds: (type.partIds || []).filter((id: string) => id !== partId)
        }
      );
    }

    // Delete the part
    return await databases.deleteDocument(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.EQUIPMENTPARTS,
      partId
    );
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["equipmentParts"] });
    queryClient.invalidateQueries({ queryKey: ["equipmentTypes"] });
    toast({
      title: "Equipment Part Deleted",
      description: "Equipment part deleted successfully.",
    });
  },
  onError: (error) => {
    if (error instanceof z.ZodError) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: error.errors.map((e) => e.message).join(", "),
      });
    } else {
      toast({
        variant: "destructive",
        title: "Failed to Delete Equipment Part",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
});

  // Delete Equipment Defect
const deleteEquipmentDefect = useMutation({
  mutationFn: async (defectId: string) => {
    return await databases.deleteDocument(
      DATABASE_IDS.CHECKING_SYSTEM,
      COLLECTION_IDS.EQUIPMENTPARTDEFECTS,
      defectId
    );
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["equipmentDefects"] });
    toast({
      title: "Equipment Defect Deleted",
      description: "Equipment defect deleted successfully.",
    });
  },
  onError: (error) => {
    if (error instanceof z.ZodError) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: error.errors.map((e) => e.message).join(", "),
      });
    } else {
      toast({
        variant: "destructive",
        title: "Failed to Delete Equipment Defect",
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
});

  return {
    // Data
    equipmentTypes,
    equipmentParts,
    equipmentDefects,
    
    // Loading States
    isLoadingTypes,
    isLoadingParts,
    isLoadingDefects,
    
    // Error States
    isTypesError,
    isPartsError,
    isDefectsError,
    
    // Mutations
    addEquipmentType,
    addEquipmentPart,
    addEquipmentDefect,

    updateEquipmentType,
    updateEquipmentPart,
    updateEquipmentDefect,

    deleteEquipmentType,
    deleteEquipmentPart,
    deleteEquipmentDefect,
  };
}