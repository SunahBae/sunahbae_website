import React from 'react';
import { Badge } from './Badge';
import { ImageCarousel } from './ImageCarousel';
import type { Publication } from '@/data/publications';

interface PublicationCardProps {
  publication: Publication;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const highlightAuthor = (authors: string) => {
    return authors.split(', ').map((author, index, array) => {
      const isHighlighted = author.includes('Sun Ah Bae');
      return (
        <React.Fragment key={index}>
          {isHighlighted ? (
            <span className="underline decoration-foreground/50 underline-offset-2">{author}</span>
          ) : (
            <span>{author}</span>
          )}
          {index < array.length - 1 && ', '}
        </React.Fragment>
      );
    });
  };

  const hasThumbnails = publication.thumbnails && publication.thumbnails.length > 0;

  return (
    <article className="py-6 border-b border-border last:border-b-0">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-2 leading-snug">
            {publication.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {highlightAuthor(publication.authors)}, {publication.venue}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {publication.badges.map((badge, index) => (
              <Badge
                key={index}
                type={badge.type}
                label={badge.label}
                url={badge.url}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Carousel */}
        {hasThumbnails && (
          <div className="w-full md:w-24 lg:w-28 flex-shrink-0 order-first md:order-last">
            <ImageCarousel
              images={publication.thumbnails!}
              alt={publication.title}
              aspectRatio="video"
            />
          </div>
        )}
      </div>
    </article>
  );
};
