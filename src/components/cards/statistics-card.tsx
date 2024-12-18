// components/cards/statistics-card.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Statistic } from "@/lib/types/statistics";
import { cn } from "@/lib/utils";

interface StatisticsCardProps {
  stat: Statistic;
  className?: string;
}

export function StatisticsCard({ stat, className }: StatisticsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          {stat.value}
          {stat.trend && (
            <span
              className={cn("ml-2 text-sm", {
                "text-green-500": stat.trend.direction === "up",
                "text-red-500": stat.trend.direction === "down",
              })}
            >
              {stat.trend.direction === "up" ? (
                <TrendingUp className="inline h-4 w-4" />
              ) : (
                <TrendingDown className="inline h-4 w-4" />
              )}
              {stat.trend.percentage}%
            </span>
          )}
        </CardTitle>
        <CardDescription>{stat.label}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{stat.description}</p>
      </CardContent>
    </Card>
  );
}
