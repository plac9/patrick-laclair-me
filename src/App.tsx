import { useState, useEffect } from 'react';
import type { Service, Project, Metric, LogEntry } from './types';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate log entries
    const initialLogs: LogEntry[] = [
      { timestamp: new Date(), level: 'success', message: 'System initialized successfully' },
      { timestamp: new Date(), level: 'info', message: 'Loading homelab services...' },
      { timestamp: new Date(), level: 'success', message: 'All containers operational' },
    ];
    setLogs(initialLogs);
  }, []);

  const metrics: Metric[] = [
    { label: 'Projects Deployed', value: 47, trend: 'up' },
    { label: 'GitHub Commits', value: '2.4k', trend: 'up' },
    { label: 'Containers Running', value: 42, trend: 'stable' },
    { label: 'Years Experience', value: 10, trend: 'up' },
  ];

  const services: Service[] = [
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

  const projects: Project[] = [
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

  const getStatusColor = (status: Service['status']) => {
    switch (status) {
      case 'operational': return 'var(--color-success)';
      case 'degraded': return 'var(--color-warning)';
      case 'down': return 'var(--color-error)';
    }
  };

  const getStatusIcon = (status: Service['status']) => {
    switch (status) {
      case 'operational': return '●';
      case 'degraded': return '▲';
      case 'down': return '■';
    }
  };

  return (
    <div className="console-container">
      {/* Header */}
      <header className="console-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="system-title">PATRICK LACLAIR</h1>
            <p className="system-subtitle">System Administrator & Software Developer</p>
          </div>
          <div className="header-right">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="system-time">
              {currentTime.toLocaleTimeString('en-US', { hour12: false })}
            </div>
          </div>
        </div>
      </header>

      {/* Metrics Grid */}
      <section className="metrics-section">
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-label">{metric.label}</div>
              <div className="metric-value">{metric.value}</div>
              {metric.trend && (
                <div className={`metric-trend trend-${metric.trend}`}>
                  {metric.trend === 'up' && '↑'}
                  {metric.trend === 'down' && '↓'}
                  {metric.trend === 'stable' && '→'}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Services Status */}
      <section className="services-section">
        <h2 className="section-title">
          <span className="title-icon">▶</span> ACTIVE SERVICES
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-name">
                  <span className="status-icon" style={{ color: getStatusColor(service.status) }}>
                    {getStatusIcon(service.status)}
                  </span>
                  {service.name}
                </div>
                <div className="service-uptime">
                  Uptime: {service.uptime}
                </div>
              </div>
              <div className="service-description">{service.description}</div>
              {service.metrics && (
                <div className="service-metrics">
                  {service.metrics.requests && <span>Requests: {service.metrics.requests}</span>}
                  {service.metrics.latency && <span>Latency: {service.metrics.latency}</span>}
                  {service.metrics.memory && <span>Memory: {service.metrics.memory}</span>}
                </div>
              )}
              {service.url && (
                <a href={service.url} className="service-link" target="_blank" rel="noopener noreferrer">
                  View → 
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section">
        <h2 className="section-title">
          <span className="title-icon">▶</span> FEATURED PROJECTS
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className={`project-status status-${project.status}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub →
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal Console */}
      <section className="terminal-section">
        <div className="terminal-header">
          <span className="terminal-title">$ patrick@console ~ logs</span>
          <div className="terminal-controls">
            <span className="control-btn">_</span>
            <span className="control-btn">□</span>
            <span className="control-btn">✕</span>
          </div>
        </div>
        <div className="terminal-content">
          {logs.map((log, index) => (
            <div key={index} className={`log-entry log-${log.level}`}>
              <span className="log-timestamp">
                [{log.timestamp.toLocaleTimeString()}]
              </span>
              <span className="log-level">[{log.level.toUpperCase()}]</span>
              <span className="log-message">{log.message}</span>
            </div>
          ))}
          <div className="terminal-cursor">
            <span className="prompt">patrick@console:~$</span>
            <span className="cursor">█</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="console-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/plac9" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:patrick@laclair.us">Email</a>
            <a href="https://laclairtech.com" target="_blank" rel="noopener noreferrer">LaClair Technologies</a>
            <a href="https://laclair.us" target="_blank" rel="noopener noreferrer">Family Site</a>
          </div>
          <div className="footer-info">
            patrick.laclair.me © 2025 | Built with React + TypeScript
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
