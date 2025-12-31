import React from 'react';
import { Badge } from './Badge';
import type { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
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

        {experience.thumbnail && (
          <div className="w-full md:w-24 lg:w-28 flex-shrink-0 order-first md:order-last">
            <div className="aspect-[4/3] bg-secondary overflow-hidden rounded-sm">
              <img
                src={experience.thumbnail}
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
