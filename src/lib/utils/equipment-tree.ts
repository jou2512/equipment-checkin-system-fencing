// src/lib/utils/equipment-tree.ts

export interface TreeNode<T> {
  id: string
  name: string
  children?: TreeNode<T>[]
  data?: T
  parentId?: string
}

export function buildTreeStructure<T extends { $id: string, name: string, parentPartId?: string }>(
  items: T[]
): TreeNode<T>[] {
  const itemMap = new Map<string, TreeNode<T>>()
  const rootNodes: TreeNode<T>[] = []

  // First pass: Create nodes
  items.forEach(item => {
    itemMap.set(item.$id, {
      id: item.$id,
      name: item.name,
      data: item,
      children: [],
      parentId: item.parentPartId
    })
  })

  // Second pass: Build hierarchy
  itemMap.forEach((node, id) => {
    if (node.parentId) {
      const parentNode = itemMap.get(node.parentId)
      if (parentNode) {
        parentNode.children = parentNode.children || []
        parentNode.children.push(node)
      } else {
        // If parent not found, treat as root
        rootNodes.push(node)
      }
    } else {
      rootNodes.push(node)
    }
  })

  return rootNodes
}

export function flattenTree<T>(
  nodes: TreeNode<T>[], 
  result: TreeNode<T>[] = [], 
  depth = 0
): TreeNode<T>[] {
  nodes.forEach(node => {
    const flattenedNode = { ...node, depth }
    delete flattenedNode.children
    result.push(flattenedNode)

    if (node.children) {
      flattenTree(node.children, result, depth + 1)
    }
  })
  return result
}

export function findNodeById<T>(
  nodes: TreeNode<T>[], 
  id: string
): TreeNode<T> | null {
  for (const node of nodes) {
    if (node.id === id) return node
    if (node.children) {
      const found = findNodeById(node.children, id)
      if (found) return found
    }
  }
  return null
}