import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
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
  );
}
