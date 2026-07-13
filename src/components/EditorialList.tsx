import React from 'react';
import { ImageCarousel } from './ImageCarousel';

/** Highlights "Sun Ah Bae" in a comma-separated name list. */
export const highlightMe = (names: string): React.ReactNode =>
  names.split(', ').map((name, index, array) => (
    <React.Fragment key={index}>
      {name.includes('Sun Ah Bae') ? <span className="me">{name}</span> : name}
      {index < array.length - 1 && ', '}
    </React.Fragment>
  ));

export const VideoButton: React.FC<{ url: string }> = ({ url }) => (
  <a
    className="vbtn"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Watch video"
  >
    <svg viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 1v10l9-5z" />
    </svg>
    Video
  </a>
);

interface EditorialRowProps {
  id?: string;
  meta?: React.ReactNode;
  title: string;
  titleUrl?: string;
  videoUrl?: string;
  subline?: React.ReactNode;
  thumbnails?: string[];
}

export const EditorialRow: React.FC<EditorialRowProps> = ({
  id,
  meta,
  title,
  titleUrl,
  videoUrl,
  subline,
  thumbnails,
}) => {
  const hasThumbnails = thumbnails && thumbnails.length > 0;

  return (
    <div id={id} className={`ed-row${hasThumbnails ? '' : ' no-thumb'}`}>
      <div>
        {meta && <div className="meta">{meta}</div>}
        <h3>
          {titleUrl ? (
            <a href={titleUrl} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
          {videoUrl && <VideoButton url={videoUrl} />}
        </h3>
        {subline && <p className="authors">{subline}</p>}
      </div>
      {hasThumbnails && (
        <div className="thumb">
          <ImageCarousel images={thumbnails!} alt={title} aspectRatio="video" />
        </div>
      )}
    </div>
  );
};

const MIN_THUMB = 24;

/**
 * Custom scrollbar for a section's inner list, rendered in the left column.
 * Tracks the list's own scroll position; hidden when the list fits without
 * scrolling. Track click jumps, thumb drag scrolls.
 */
export const SectionScrollbar: React.FC<{
  listRef: React.RefObject<HTMLElement>;
  /** Changes when the list content changes (e.g. filters) to force a resync. */
  contentKey?: unknown;
}> = ({ listRef, contentKey }) => {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  const getMax = () => {
    const list = listRef.current;
    if (!list) return null;
    return { list, max: list.scrollHeight - list.clientHeight };
  };

  React.useEffect(() => {
    let pending: ReturnType<typeof setTimeout> | null = null;

    const update = () => {
      pending = null;
      const metrics = getMax();
      const thumb = thumbRef.current;
      const track = trackRef.current;
      if (!metrics || !thumb || !track) return;
      const { list, max } = metrics;
      const trackH = track.clientHeight;
      if (max <= 4 || trackH < MIN_THUMB * 2) {
        setVisible(false);
        return;
      }
      setVisible(true);
      const thumbLen = Math.max(
        MIN_THUMB,
        Math.min(trackH, (list.clientHeight / list.scrollHeight) * trackH)
      );
      const progress = Math.min(1, Math.max(0, list.scrollTop / max));
      thumb.style.height = `${thumbLen}px`;
      thumb.style.transform = `translateY(${progress * (trackH - thumbLen)}px)`;
    };

    // Simple ~60fps throttle (setTimeout is more reliable than rAF in
    // background/embedded contexts)
    const schedule = () => {
      if (pending === null) pending = setTimeout(update, 16);
    };

    update();
    // Low-frequency safety resync: catches layout changes that produce no
    // scroll/resize/RO event (late fonts, throttled embedded contexts)
    const resync = setInterval(update, 1000);
    const list = listRef.current;
    list?.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    const observer = new ResizeObserver(schedule);
    if (list) observer.observe(list);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => {
      list?.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('load', schedule);
      observer.disconnect();
      if (pending !== null) clearTimeout(pending);
      clearInterval(resync);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listRef, contentKey]);

  const scrollToRatio = (ratio: number, smooth: boolean) => {
    const metrics = getMax();
    if (!metrics) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    metrics.list.scrollTo({
      top: ratio * metrics.max,
      behavior: smooth && !reduced ? 'smooth' : 'auto',
    });
  };

  const onTrackClick = (e: React.MouseEvent) => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!track || !thumb) return;
    const trackRect = track.getBoundingClientRect();
    const thumbLen = thumb.offsetHeight;
    const ratio = Math.min(
      1,
      Math.max(
        0,
        (e.clientY - trackRect.top - thumbLen / 2) / Math.max(1, trackRect.height - thumbLen)
      )
    );
    scrollToRatio(ratio, true);
  };

  const onThumbPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const thumb = thumbRef.current;
    const metrics = getMax();
    if (!thumb || !metrics) return;
    thumb.setPointerCapture(e.pointerId);
    const startY = e.clientY;
    const startScroll = metrics.list.scrollTop;
    const trackH = trackRef.current?.clientHeight ?? 0;
    const perTrackPx = metrics.max / Math.max(1, trackH - thumb.offsetHeight);
    const onMove = (ev: PointerEvent) => {
      metrics.list.scrollTop = startScroll + (ev.clientY - startY) * perTrackPx;
    };
    const onUp = () => {
      thumb.removeEventListener('pointermove', onMove);
      thumb.removeEventListener('pointerup', onUp);
    };
    thumb.addEventListener('pointermove', onMove);
    thumb.addEventListener('pointerup', onUp);
  };

  return (
    <div
      className={`section-scrollbar${visible ? '' : ' is-hidden'}`}
      aria-hidden="true"
    >
      <div className="track" ref={trackRef} onClick={onTrackClick}>
        <div className="thumb" ref={thumbRef} onPointerDown={onThumbPointerDown} />
      </div>
    </div>
  );
};

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterGroupProps {
  label: string;
  options: FilterOption[];
  selected: string[];
  onToggle: (value: string) => void;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  options,
  selected,
  onToggle,
}) => (
  <div className="fgroup">
    <p className="g-label">{label}</p>
    <div className="opts" role="group" aria-label={`Filter by ${label.toLowerCase()}`}>
      {options.map((option) => (
        <label className="opt" key={option.value}>
          <input
            type="checkbox"
            checked={selected.includes(option.value)}
            onChange={() => onToggle(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);
