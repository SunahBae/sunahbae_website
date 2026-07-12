import React, { useEffect, useRef, useState } from 'react';
import { TopNav } from '@/components/TopNav';
import { HeroSection } from '@/components/HeroSection';
import { PublicationSection } from '@/components/PublicationSection';
import { ProjectSection } from '@/components/ProjectSection';
import { EtcSection } from '@/components/EtcSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  // Show the page-level footer only when the last section (Etc) is in view
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const onScroll = () => {
      // Reached the very bottom of the page = last section fully in view
      setAtBottom(root.scrollTop + root.clientHeight >= root.scrollHeight - 8);
    };
    onScroll();
    root.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      root.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Elastic section navigation (desktop only): at a section boundary, extra
  // scrolling drags the content with rubber-band resistance (revealing empty
  // space); past a threshold it "pops" fast to the next section. In-section
  // list scrolling and the page ends stay native.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const MAX = 130; // px the content can be dragged at most (visual travel cap)
    const RESIST = 240; // higher = stiffer rubber band (content moves less per scroll)
    const TRIGGER = 1700; // accumulated overscroll (px) needed to fire the pop
    const SNAP_MS = 520; // duration of the smooth glide to the next section
    const LOCKOUT = 700; // ms lockout right after a pop

    let pull = 0; // signed accumulated overscroll: + past bottom, − past top
    let target: HTMLElement | null = null; // section we're pulling toward
    let dragEl: HTMLElement | null = null; // element being visually dragged
    let animating = false;
    let lastNav = 0;
    let releaseTimer: ReturnType<typeof setTimeout> | null = null;

    const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
    const reduced = () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const sections = () =>
      ['about', 'publication', 'project', 'etc']
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el);

    const activeIndex = (secs: HTMLElement[]) => {
      const top = root.getBoundingClientRect().top;
      let idx = 0;
      let best = Infinity;
      secs.forEach((s, i) => {
        const d = Math.abs(s.getBoundingClientRect().top - top);
        if (d < best) {
          best = d;
          idx = i;
        }
      });
      return idx;
    };

    const dragContent = (section: HTMLElement) =>
      section.querySelector<HTMLElement>('.ed-content') ??
      section.querySelector<HTMLElement>('.site-container');

    // rubber-band: diminishing travel the further you pull
    const damped = (raw: number) => MAX * (1 - Math.exp(-raw / RESIST));

    const applyPull = () => {
      if (!dragEl) return;
      const off = damped(Math.abs(pull)) * (pull > 0 ? -1 : 1);
      dragEl.style.transition = 'none';
      dragEl.style.transform = `translateY(${off}px)`;
    };

    const springBack = () => {
      const el = dragEl;
      pull = 0;
      target = null;
      if (!el) return;
      el.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.transform = '';
      dragEl = null;
    };

    const pop = () => {
      const el = dragEl;
      const dest = target;
      animating = true;
      lastNav = Date.now();
      pull = 0;
      dragEl = null;
      target = null;
      // Spring the pulled content back while the page glides to the next
      // section — the two animate together for a smooth handoff (not a jump).
      if (el) {
        el.style.transition = `transform ${SNAP_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        el.style.transform = '';
      }
      dest?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // stay locked through the glide so it reads as one continuous motion
      setTimeout(() => {
        animating = false;
        if (el) el.style.transition = '';
      }, SNAP_MS);
    };

    const onWheel = (e: WheelEvent) => {
      if (!isDesktop() || Math.abs(e.deltaY) < 2) return;
      if (animating) {
        e.preventDefault();
        return;
      }

      const secs = sections();
      if (!secs.length) return;
      const idx = activeIndex(secs);
      const dir = e.deltaY > 0 ? 1 : -1;
      const section = secs[idx];
      const list = section.querySelector<HTMLElement>('.ed-list');

      // Inner list can still scroll in this direction → native scroll
      if (list) {
        const atTop = list.scrollTop <= 0;
        const atBottom =
          list.scrollTop + list.clientHeight >= list.scrollHeight - 1;
        const canScrollList = dir > 0 ? !atBottom : !atTop;
        if (canScrollList) {
          if (pull !== 0) springBack();
          if (!list.contains(e.target as Node)) {
            e.preventDefault();
            list.scrollTop += e.deltaY;
          }
          return;
        }
      }

      const next = idx + dir;
      if (next < 0 || next >= secs.length) {
        if (pull !== 0) springBack();
        return; // page ends → native overscroll
      }

      // At a boundary: consume the scroll and rubber-band toward the neighbor
      e.preventDefault();
      if (Date.now() - lastNav < LOCKOUT) return;

      if (reduced()) {
        // no-animation preference → jump immediately, no rubber-band
        lastNav = Date.now();
        secs[next].scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }

      // reset accumulation if direction flipped
      if ((pull > 0 && dir < 0) || (pull < 0 && dir > 0)) pull = 0;
      target = secs[next];
      dragEl = dragContent(section);
      pull += e.deltaY;
      pull = Math.max(-TRIGGER * 1.5, Math.min(TRIGGER * 1.5, pull));
      applyPull();

      if (Math.abs(pull) >= TRIGGER) {
        if (releaseTimer) clearTimeout(releaseTimer);
        pop();
        return;
      }
      // if the user stops pushing before the trigger, spring back
      if (releaseTimer) clearTimeout(releaseTimer);
      releaseTimer = setTimeout(springBack, 150);
    };

    root.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      root.removeEventListener('wheel', onWheel);
      if (releaseTimer) clearTimeout(releaseTimer);
      if (dragEl) {
        dragEl.style.transition = '';
        dragEl.style.transform = '';
      }
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen bg-background md:snap-y md:snap-mandatory md:overflow-y-auto md:h-screen"
    >
      {/* Sticky top bar: logo + section nav */}
      <TopNav />

      {/* About (hero) - fills the first screen below the nav */}
      <div
        id="about"
        className="min-h-screen md:min-h-0 md:h-[calc(100vh-64px)] md:overflow-hidden md:snap-start md:snap-always scroll-mt-[88px] md:scroll-mt-16 flex flex-col"
      >
        <div className="site-container w-full flex-1 flex items-center justify-center pt-8 pb-8 md:pt-0 md:pb-0">
          <HeroSection />
        </div>
      </div>

      {/* Content Sections - one full-screen section at a time on desktop */}
      <div>
        <div className="site-container">
          <PublicationSection />
          <ProjectSection />
          <EtcSection />
          <div className="md:hidden">
            <Footer />
          </div>
        </div>
      </div>

      {/* Page-level footer, pinned to the bottom on the last section (desktop) */}
      <div className={`site-footer-fixed${atBottom ? ' show' : ''}`} aria-hidden={!atBottom}>
        © 2026.06 Sun Ah Bae. All rights reserved. | sa.bae@kaist.ac.kr
      </div>
    </div>
  );
};

export default Index;
