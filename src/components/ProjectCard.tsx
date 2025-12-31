import React from 'react';
import { Badge } from './Badge';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="py-6 border-b border-border last:border-b-0">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {project.role}, {project.organization}, {project.year}
          </p>
          {project.badges && project.badges.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.badges.map((badge, index) => (
                <Badge
                  key={index}
                  type={badge.type}
                  label={badge.label}
                  url={badge.url}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail or Video */}
        {(project.thumbnail || project.media) && (
          <div className="w-full md:w-28 lg:w-32 flex-shrink-0 order-first md:order-last">
            {project.media?.type === 'video' ? (
              <div className="aspect-video bg-secondary overflow-hidden rounded-sm">
                <a
                  href={project.media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground/10">
                    <div className="w-8 h-8 rounded-full bg-background/90 flex items-center justify-center">
                      <svg className="w-4 h-4 text-foreground ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            ) : project.thumbnail ? (
              <div className="aspect-[4/3] bg-secondary overflow-hidden rounded-sm">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
};
