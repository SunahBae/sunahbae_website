import React, { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'publication', label: 'Publication' },
  { id: 'project', label: 'Project' },
  { id: 'etc', label: 'Etc.' },
];

export const TopNav: React.FC = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A section becomes active when it crosses the upper-middle band of the viewport
      { rootMargin: '-35% 0px -60% 0px' }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="top-nav">
      <div className="site-container top-nav-inner">
        <button className="logo" onClick={() => go('about')}>
          SUN AH BAE
        </button>
        <div className="cat-pills" role="group" aria-label="Sections">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              className={active === id ? 'active' : ''}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
