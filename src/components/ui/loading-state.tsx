// components/ui/loading-state.tsx
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingStateProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

/**
 * LoadingState component for displaying loading animations
 *
 * @param className - Additional CSS classes
 * @param size - Size of the loading spinner
 * @param label - Optional loading text
 */
export function LoadingState({
  className,
  size = "md",
  label,
}: LoadingStateProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <Loader2
        className={cn("animate-spin text-muted-foreground", sizeClasses[size])}
      />
      {label && <span className="text-sm text-muted-foreground">{label}</span>}
    </div>
  );
}
