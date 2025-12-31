import React from 'react';
import { Badge } from './Badge';
import type { DesignItem } from '@/data/design';

interface DesignCardProps {
  item: DesignItem;
}

export const DesignCard: React.FC<DesignCardProps> = ({ item }) => {
  return (
    <article className="py-5 border-b border-border last:border-b-0">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 leading-snug">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {item.description}
          </p>
          {item.badges && item.badges.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.badges.map((badge, index) => (
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

        {item.thumbnail && (
          <div className="w-full md:w-24 lg:w-28 flex-shrink-0 order-first md:order-last">
            <div className="aspect-[4/3] bg-secondary overflow-hidden rounded-sm">
              <img
                src={item.thumbnail}
                alt={item.title}
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
