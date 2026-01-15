import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-cream">{project.title}</h3>
      <p className="text-cream/70 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span
            key={`${tech.name}-${index}`}
            className="px-3 py-1 bg-ochre/20 text-ochre rounded-full text-sm"
          >
            {tech.name}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {project.links.githubUrl && (
          <a
            href={project.links.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream hover:text-ochre transition-colors text-sm"
          >
            GitHub
          </a>
        )}
        {project.links.liveUrl && (
          <a
            href={project.links.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream hover:text-ochre transition-colors text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
