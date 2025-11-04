import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'SubnetCalculatorPro',
    description: 'iOS app for network subnet calculations',
    tech: ['Swift', 'SwiftUI', 'Networking'],
    status: 'active',
    github: 'https://github.com/plac9'
  },
  {
    name: 'Homelab Infrastructure',
    description: 'Self-hosted services on Proxmox',
    tech: ['Docker', 'Traefik', 'Authentik', 'Grafana'],
    status: 'active'
  },
  {
    name: 'LaClair Family Terminal',
    description: 'Interactive terminal-style family website',
    tech: ['React', 'TypeScript', 'Vite'],
    status: 'active',
    link: 'https://laclair.us'
  }
];
