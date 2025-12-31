import React from 'react';
import { Badge } from './Badge';
import { ImageCarousel } from './ImageCarousel';
import type { Award } from '@/data/awards';

interface AwardCardProps {
  award: Award;
}

export const AwardCard: React.FC<AwardCardProps> = ({ award }) => {
  const hasThumbnails = award.thumbnails && award.thumbnails.length > 0;

  const highlightName = (participants: string) => {
    return participants.split(', ').map((name, index, array) => {
      const isHighlighted = name.includes('Sun Ah Bae');
      return (
        <React.Fragment key={index}>
          {isHighlighted ? (
            <span className="underline decoration-foreground/50 underline-offset-2">{name}</span>
          ) : (
            <span>{name}</span>
          )}
          {index < array.length - 1 && ', '}
        </React.Fragment>
      );
    });
  };

  return (
    <article className="py-5 border-b border-border last:border-b-0">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 leading-snug">
            {award.title}
            {award.badges && award.badges.length > 0 && (
              <span className="inline-flex gap-1.5 ml-2">
                {award.badges.map((badge, index) => (
                  <Badge
                    key={index}
                    type={badge.type}
                    label={badge.label}
                    url={badge.url}
                  />
                ))}
              </span>
            )}
          </h3>
          <p className="text-sm text-muted-foreground">
            {highlightName(award.participants)}, {award.organization}, {award.location}, {award.year}
          </p>
        </div>

        {hasThumbnails && (
          <div className="w-full md:w-24 lg:w-28 flex-shrink-0 order-first md:order-last">
            <ImageCarousel
              images={award.thumbnails!}
              alt={award.title}
              aspectRatio="video"
            />
          </div>
        )}
      </div>
    </article>
  );
};
