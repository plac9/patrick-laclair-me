import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
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
    <div className="service-card">
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
  );
}
