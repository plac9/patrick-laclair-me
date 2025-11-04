import type { Service } from '../types';

export const services: Service[] = [
  {
    name: 'Homelab Infrastructure',
    status: 'operational',
    uptime: '99.9%',
    description: '14 services, 42 containers',
    metrics: { requests: '1.2M/mo', latency: '12ms', memory: '16GB' }
  },
  {
    name: 'LaClair Technologies',
    status: 'operational',
    uptime: '100%',
    description: 'Web development & consulting',
    url: 'https://laclairtech.com'
  },
  {
    name: 'Family Terminal',
    status: 'operational',
    uptime: '100%',
    description: 'Interactive family website',
    url: 'https://laclair.us'
  },
  {
    name: 'Monitoring Stack',
    status: 'operational',
    uptime: '99.8%',
    description: 'Grafana, Prometheus, Loki',
    metrics: { requests: '500k/mo', latency: '8ms' }
  }
];
