import React from 'react';
import { ImageCarousel } from './ImageCarousel';
import type { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const hasMultipleImages = experience.thumbnails && experience.thumbnails.length > 1;
  const hasSingleImage = experience.thumbnails && experience.thumbnails.length === 1;

  return (
    <article className="py-5 border-b border-border last:border-b-0">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 leading-snug">
            {experience.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {experience.role}, {experience.organization}
            {experience.location && `, ${experience.location}`}, {experience.year}
          </p>
        </div>

        {hasMultipleImages && (
          <div className="w-full md:w-32 lg:w-40 flex-shrink-0 order-first md:order-last">
            <ImageCarousel 
              images={experience.thumbnails!} 
              alt={experience.title}
              aspectRatio="video"
            />
          </div>
        )}

        {hasSingleImage && (
          <div className="w-full md:w-32 lg:w-40 flex-shrink-0 order-first md:order-last">
            <div className="aspect-video bg-secondary overflow-hidden rounded-sm">
              <img
                src={experience.thumbnails![0]}
                alt={experience.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
