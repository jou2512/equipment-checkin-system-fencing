/**
 * Performance Monitoring Utilities
 * src/lib/utils/performance.ts
 */

import React from "react";

interface PerformanceMetric {
  name: string;
  startTime: number;
  duration: number;
  metadata?: Record<string, any>;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];
  private timers: Map<string, number> = new Map();
  private enabled: boolean = process.env.NODE_ENV === 'development';

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  /**
   * Start timing an operation
   */
  startTimer(name: string): void {
    if (!this.enabled) return;
    this.timers.set(name, performance.now());
  }

  /**
   * End timing an operation and record the metric
   */
  endTimer(name: string, metadata?: Record<string, any>): void {
    if (!this.enabled) return;
    
    const startTime = this.timers.get(name);
    if (startTime === undefined) {
      console.warn(`No timer found for: ${name}`);
      return;
    }

    const endTime = performance.now();
    const duration = endTime - startTime;

    this.metrics.push({
      name,
      startTime,
      duration,
      metadata,
    });

    this.timers.delete(name);

    // Log slow operations (over 100ms)
    if (duration > 100) {
      console.warn(`Slow operation detected: ${name} took ${duration.toFixed(2)}ms`, metadata);
    }
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = [];
    this.timers.clear();
  }

  /**
   * Get performance report
   */
  getReport(): { metrics: PerformanceMetric[], summary: { slowOperations: PerformanceMetric[] } } {
    const slowOperations = this.metrics.filter(m => m.duration > 100);
    
    return {
      metrics: [...this.metrics],
      summary: {
        slowOperations,
      },
    };
  }
}

/**
 * Performance monitoring hook for React components
 */
export function usePerformanceMonitoring(componentName: string) {
  const monitor = PerformanceMonitor.getInstance();

  React.useEffect(() => {
    monitor.startTimer(`${componentName}:mount`);
    
    return () => {
      monitor.endTimer(`${componentName}:mount`);
    };
  }, [componentName]);

  return {
    startOperation: (name: string) => monitor.startTimer(`${componentName}:${name}`),
    endOperation: (name: string, metadata?: Record<string, any>) => 
      monitor.endTimer(`${componentName}:${name}`, metadata),
  };
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();