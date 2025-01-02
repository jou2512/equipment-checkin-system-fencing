// src/components/auth/protected-component.tsx
import { ReactNode } from "react";
import { usePermissions, PermissionType } from "@/hooks/use-permissions";

interface ProtectedComponentProps {
  requiredPermission: PermissionType;
  children: ReactNode;
  fallback?: ReactNode;
}

export function ProtectedComponent({
  requiredPermission,
  children,
  fallback = null,
}: ProtectedComponentProps) {
  const { hasPermission, isLoading } = usePermissions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!hasPermission(requiredPermission)) {
    return fallback;
  }

  return <>{children}</>;
}

// Usage examples:
// Protect a route/component
{
  /* 
<ProtectedComponent requiredPermission="manage_roles">
  <RoleManagementPage />
</ProtectedComponent>
*/
}

// Conditionally render a button
{
  /* 
<ProtectedComponent 
  requiredPermission="approve_check-ins"
  fallback={<p>You don't have permission to approve check-ins</p>}
>
  <ApproveButton onClick={handleApprove} />
</ProtectedComponent>
*/
}
