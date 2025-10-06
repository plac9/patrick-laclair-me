/**
 * Type definitions for the Homelab Console
 */

export interface Service {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  uptime: string;
  description: string;
  url?: string;
  metrics?: {
    requests?: string;
    latency?: string;
    memory?: string;
  };
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  status: 'active' | 'maintained' | 'archived';
}

export interface Metric {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
}

export interface LogEntry {
  timestamp: Date;
  level: 'info' | 'warn' | 'error' | 'success';
  message: string;
}
