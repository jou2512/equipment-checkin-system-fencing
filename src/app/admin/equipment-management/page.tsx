"use client";

import { useState, useEffect, useMemo } from "react";
import { useEquipmentManagementStore } from "@/lib/store/equipment-management-store";
import {
  EquipmentPart,
  categories,
  category,
} from "@/lib/types/equipment-management";
import { buildTreeStructure } from "@/lib/utils/equipment-tree";

// Tree view component for rendering hierarchical parts
function PartTreeView({ parts }: { parts: any[] }) {
  // Build tree structure
  const partsTree = useMemo(() => buildTreeStructure(parts), [parts]);

  // Recursive rendering function
  const renderNode = (node: any, depth = 0) => {
    return (
      <div key={node.id} className={`pl-${depth * 4} mb-2`}>
        <div className="flex items-center">
          {depth > 0 && (
            <svg
              className="w-4 h-4 mr-2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          )}
          <span
            className={`
            ${depth === 0 ? "font-bold" : "text-gray-700"}
            ${node.children && node.children.length > 0 ? "underline" : ""}
          `}
          >
            {node.name}
          </span>
        </div>
        {node.children &&
          node.children.map((child: any) => renderNode(child, depth + 1))}
      </div>
    );
  };
  return (
    <div className="bg-gray-50 p-4 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">Parts Hierarchy</h3>
      {partsTree.length === 0 ? (
        <p className="text-gray-500">No parts created yet</p>
      ) : (
        partsTree.map((node) => renderNode(node))
      )}
    </div>
  );
}

export default function EquipmentManagementInterface() {
  const {
    equipmentTypes,
    equipmentParts,
    equipmentDefects,
    fetchEquipmentTypes,
    fetchEquipmentParts,
    fetchEquipmentDefects,
    createEquipmentType,
    createEquipmentPart,
    createEquipmentDefect,
  } = useEquipmentManagementStore();

  // State for form inputs
  const [newEquipmentType, setNewEquipmentType] = useState({
    name: "",
    category: "weapon" as category,
  });

  const [newEquipmentPart, setNewEquipmentPart] = useState({
    name: "",
    description: "",
    equipmentTypeIds: [] as string[],
    partIds: [] as string[],
  });

  const [newEquipmentDefect, setNewEquipmentDefect] = useState({
    name: "",
    description: "",
    severity: "medium" as "low" | "medium" | "high",
    applicablePartIds: [] as string[],
  });

  const reset = {
    all: async () => {
      reset.type();
      reset.part();
      reset.defect();
    },
    type: async () => {
      setNewEquipmentType({
        name: "",
        category: "weapon" as category,
      });
    },
    part: async () => {
      setNewEquipmentPart({
        name: "",
        description: "",
        equipmentTypeIds: [] as string[],
        partIds: [] as string[],
      });
    },
    defect: async () => {
      setNewEquipmentDefect({
        name: "",
        description: "",
        severity: "medium" as "low" | "medium" | "high",
        applicablePartIds: [] as string[],
      });
    },
  };

  // Fetch initial data
  useEffect(() => {
    fetchEquipmentTypes();
    fetchEquipmentParts();
  }, []);

  // Handlers for creating new items
  const handleCreateEquipmentType = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEquipmentType({
        ...newEquipmentType,
        partIds: [],
      });
      // Reset form
      setNewEquipmentType({ name: "", category: "weapon" });
      console.log("new equipment type: " + newEquipmentType.name + " created");
    } catch (error) {
      console.error("Failed to create equipment type", error);
    }
  };

  // Handler for creating equipment part across multiple types
  const handleCreateEquipmentPart = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Step 1: Create top-level parts for selected equipment types
      const topLevelPartPromises = newEquipmentPart.equipmentTypeIds.map(
        async (typeId) => {
          console.log(typeId);
          return createEquipmentPart({
            name: newEquipmentPart.name,
            description: newEquipmentPart.description,
            equipmentTypeId: typeId,
          });
        }
      );

      const topLevelParts = await Promise.all(topLevelPartPromises);

      // Step 2: Create nested parts based on parent part references
      const nestedPartPromises = newEquipmentPart.partIds.map(
        async (partId) => {
          // Find the parent part to get its equipment type
          const parentPart = equipmentParts.find((part) => part.$id === partId);
          console.log(parentPart);
          console.log(partId);
          if (!parentPart) {
            throw new Error(`Parent part with ID ${parentPart} not found`);
          }

          // Create nested part with parent part's equipment type and parent ID
          return createEquipmentPart({
            name: newEquipmentPart.name,
            description: newEquipmentPart.description,
            equipmentTypeId: parentPart.equipmentTypeId.$id,
            parentPartId: partId,
          });
        }
      );

      await Promise.all(nestedPartPromises);

      console.log("finished");

      // Refresh parts after creation
      await fetchEquipmentParts();
      await reset.part();
      return {
        topLevelParts,
        message: `Created ${newEquipmentPart.name} part(s) successfully`,
      };
    } catch (error) {
      console.error("Comprehensive part creation failed:", error);

      // Enhanced error handling
      if (error instanceof Error) {
        throw new Error(`Part creation failed: ${error.message}`);
      }

      throw new Error("Unknown error occurred during part creation");
    }
  };

  const handleCreateEquipmentDefect = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEquipmentDefect(newEquipmentDefect);
      // Reset form
      setNewEquipmentDefect({
        name: "",
        description: "",
        severity: "medium",
        applicablePartIds: [],
      });
    } catch (error) {
      console.error("Failed to create equipment defect", error);
    }
  };

  const NameFormattingParts = (part: EquipmentPart) => {
    const isDuplicated =
      equipmentParts.filter(
        (element) => element.name === part.name && element !== part
      ).length > 0;

    const hasParent = !!part.parentPartId;
    const check = hasParent ? equipmentParts : equipmentTypes;

    const parentName = isDuplicated
      ? check.find(
          (element) =>
            element.$id ===
            (hasParent ? part.parentPartId : part.equipmentTypeId)
        )?.name || ""
      : "";

    return parentName ? `${parentName} | ${part.name}` : part.name;
  };

  return (
    <div className="container mx-auto p-6 text-black">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">
        Equipment Management
      </h1>

      {/* Equipment Type Creation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4  dark:text-white">
          Create Equipment Type
        </h2>
        <form onSubmit={handleCreateEquipmentType} className="space-y-4">
          <input
            type="text"
            placeholder="Equipment Type Name"
            value={newEquipmentType.name}
            onChange={(e) =>
              setNewEquipmentType((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full p-2 border rounded"
            required
          />
          <select
            value={newEquipmentType.category}
            onChange={(e) =>
              setNewEquipmentType((prev) => ({
                ...prev,
                category: e.target.value as "weapon" | "protective-gear",
              }))
            }
            className="w-full p-2 border rounded"
          >
            {categories.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Create Equipment Type
          </button>
        </form>
      </section>

      {/* Equipment Parts Creation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4  dark:text-white">
          Create Equipment Part
        </h2>
        <form onSubmit={handleCreateEquipmentPart} className="space-y-4">
          <input
            type="text"
            placeholder="Part Name"
            value={newEquipmentPart.name}
            onChange={(e) =>
              setNewEquipmentPart((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Part Description"
            value={newEquipmentPart.description}
            onChange={(e) =>
              setNewEquipmentPart((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className="w-full p-2 border rounded"
          />
          {/* Multi-select for Equipment Types */}
          <div className="border rounded p-2 dark:text-white">
            <h3 className="font-semibold mb-2">Select Equipment Types</h3>
            {equipmentTypes.map((type) => (
              <label
                key={type.$id}
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="checkbox"
                  checked={newEquipmentPart.equipmentTypeIds.includes(
                    type.$id!
                  )}
                  onChange={(e) => {
                    setNewEquipmentPart((prev) => {
                      const currentIds = prev.equipmentTypeIds;
                      if (e.target.checked) {
                        return {
                          ...prev,
                          equipmentTypeIds: [...currentIds, type.$id!],
                        };
                      } else {
                        return {
                          ...prev,
                          equipmentTypeIds: currentIds.filter(
                            (id) => id !== type.$id
                          ),
                        };
                      }
                    });
                  }}
                  className="mr-2"
                />
                {type.name}
              </label>
            ))}
          </div>

          {/* Multi-select for Parent Parts */}
          <div className="border rounded p-2 dark:text-white">
            <h3 className="font-semibold mb-2">Select Parent Parts</h3>
            {equipmentParts.map((part) => (
              <label
                key={part.$id}
                className="inline-flex items-center mr-4 mb-2"
              >
                <input
                  type="checkbox"
                  checked={newEquipmentPart.partIds.includes(part.$id!)}
                  onChange={(e) => {
                    setNewEquipmentPart((prev) => {
                      const currentIds = prev.partIds;
                      if (e.target.checked) {
                        return {
                          ...prev,
                          partIds: [...currentIds, part.$id!],
                        };
                      } else {
                        return {
                          ...prev,
                          partIds: currentIds.filter((id) => id !== part.$id),
                        };
                      }
                    });
                  }}
                  className="mr-2"
                />
                {NameFormattingParts(part) + part.$id}
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded"
            disabled={
              newEquipmentPart.equipmentTypeIds.length +
                newEquipmentPart.partIds.length ===
              0
            }
          >
            Create Equipment Part
          </button>
        </form>
      </section>

      {/* Equipment Defects Creation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4  dark:text-white">
          Create Equipment Defect
        </h2>
        <form onSubmit={handleCreateEquipmentDefect} className="space-y-4">
          <input
            type="text"
            placeholder="Defect Name"
            value={newEquipmentDefect.name}
            onChange={(e) =>
              setNewEquipmentDefect((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Defect Description"
            value={newEquipmentDefect.description}
            onChange={(e) =>
              setNewEquipmentDefect((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className="w-full p-2 border rounded"
          />
          <select
            value={newEquipmentDefect.severity}
            onChange={(e) =>
              setNewEquipmentDefect((prev) => ({
                ...prev,
                severity: e.target.value as "low" | "medium" | "high",
              }))
            }
            className="w-full p-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          {/* Multi-select for applicable parts */}
          <div className="border rounded p-2">
            <h3 className="font-semibold mb-2 dark:text-white">
              Applicable Parts
            </h3>
            {equipmentParts.map((part) => (
              <label
                key={part.$id}
                className="inline-flex items-center mr-4 mb-2 dark:text-white"
              >
                <input
                  type="checkbox"
                  checked={newEquipmentDefect.applicablePartIds.includes(
                    part.$id!
                  )}
                  onChange={(e) => {
                    setNewEquipmentDefect((prev) => {
                      const currentIds = prev.applicablePartIds;
                      if (e.target.checked) {
                        return {
                          ...prev,
                          applicablePartIds: [...currentIds, part.$id!],
                        };
                      } else {
                        return {
                          ...prev,
                          applicablePartIds: currentIds.filter(
                            (id) => id !== part.$id
                          ),
                        };
                      }
                    });
                  }}
                  className="mr-2"
                />
                {part.name}
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="bg-purple-500 text-white p-2 rounded"
          >
            Create Equipment Defect
          </button>
        </form>
      </section>

      <section className="mb-8">
        <PartTreeView parts={equipmentParts} />
      </section>
    </div>
  );
}
