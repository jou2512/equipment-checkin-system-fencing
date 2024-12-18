// types/statistics.ts
export interface Statistic {
  label: string;
  value: string;
  description: string;
  trend?: {
    direction: 'up' | 'down';
    percentage: number;
  };
}
