import type { Service } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">
        <span className="title-icon">▶</span> ACTIVE SERVICES
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
