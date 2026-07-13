import React, { useEffect, useRef, useState } from 'react';
import { news } from '@/data/news';

const ROTATE_MS = 4000;
const FADE_MS = 400;

export const RecentTicker: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const pausedRef = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (news.length < 2 || reduced) return;

    const timer = setInterval(() => {
      if (pausedRef.current) return;
      setFading(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % news.length);
        setFading(false);
      }, FADE_MS);
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  const item = news[index];

  // For in-page targets ('#some-id') scroll to that item — bringing both the
  // section and its inner list into view — and briefly highlight it. External
  // URLs (http…) fall through to normal link behavior.
  const onClick = (e: React.MouseEvent) => {
    const href = item.href;
    if (!href.startsWith('#')) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    e.preventDefault();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // scrollIntoView walks every scrollable ancestor (inner list + page snap
    // container), so it reveals the row inside the slide-mode section too.
    target.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth',
      block: 'center',
    });
    target.classList.add('ed-row--flash');
    window.setTimeout(() => target.classList.remove('ed-row--flash'), 1600);
  };

  return (
    <div className="rt">
      <span className="rt-dot" aria-hidden="true" />
      <span className="rt-label">RECENT</span>
      <a
        className={`rt-item${fading ? ' is-fading' : ''}`}
        href={item.href}
        onClick={onClick}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <span className="rt-date">{item.date}</span>
        <span className={`rt-kind ${item.kind}`}>{item.kindLabel}</span>
        <span
          className="rt-what"
          dangerouslySetInnerHTML={{ __html: item.html }}
        />
        <span className="rt-arrow" aria-hidden="true">
          →
        </span>
      </a>
      {news.length > 1 && (
        <span className="rt-counter">
          {index + 1} / {news.length}
        </span>
      )}
    </div>
  );
};
