import React from 'react';
import { Badge } from './Badge';
import { ImageCarousel } from './ImageCarousel';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasThumbnails = project.thumbnails && project.thumbnails.length > 0;

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

        {/* Thumbnail Carousel */}
        {hasThumbnails && (
          <div className="w-full md:w-28 lg:w-32 flex-shrink-0 order-first md:order-last">
            <ImageCarousel
              images={project.thumbnails!}
              alt={project.title}
              aspectRatio="video"
            />
          </div>
        )}
      </div>
    </article>
  );
};
