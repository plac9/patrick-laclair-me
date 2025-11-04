import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        <span className="title-icon">▶</span> FEATURED PROJECTS
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
