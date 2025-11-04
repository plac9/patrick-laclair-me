import type { Metric } from '../types';

interface MetricsGridProps {
  metrics: Metric[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <section id="metrics" className="metrics-section">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
  );
}
