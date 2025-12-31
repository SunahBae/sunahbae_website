import React from 'react';

interface BadgeProps {
  type: 'link' | 'video' | 'conf' | 'dom' | 'int' | 'ect';
  label: string;
  url?: string;
}

export const Badge: React.FC<BadgeProps> = ({ type, label, url }) => {
  const getClassName = () => {
    switch (type) {
      case 'link':
        return 'badge-link';
      case 'video':
        return 'badge-video';
      case 'conf':
      case 'dom':
      case 'int':
        return 'badge-gray';
      case 'ect':
        return 'badge-ect';
      default:
        return 'badge-gray';
    }
  };

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${getClassName()} hover:opacity-80 transition-opacity`}
      >
        {label}
      </a>
    );
  }

  return <span className={getClassName()}>{label}</span>;
};
