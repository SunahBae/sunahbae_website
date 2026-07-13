import React from 'react';
import { RecentTicker } from './RecentTicker';

const keywords = [
  'Spatial Experience Design',
  'Data Driven Design',
  'Biosignal',
  'IoT',
  'XR',
];

// hrefs carried over verbatim from the previous icon links
const links = [
  {
    label: 'CV',
    href: 'https://drive.google.com/file/d/1CpTFSzOtNIyO232ccVjlnij7SeNXd-59/view?usp=sharing',
    external: true,
  },
  { label: 'Email', href: 'mailto:sa.bae@kaist.ac.kr', external: false },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?hl=en&user=5VLxQekAAAAJ',
    external: true,
  },
  { label: 'LinkedIn', href: 'http://www.linkedin.com/in/sunahbae', external: true },
];

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-col">
      <div className="hero-center">
        <div className="hero-grid">
          <div className="hero-photo">
            <img src="/images/profile.png" alt="Sun Ah Bae" />
          </div>
          <div className="hero-txt">
            <p className="hero-affil">I'm a Ph.D. student at Future Space Lab, KAIST.</p>
            <p className="hero-lead">
              My research focuses on understanding how spatial experiences are
              formed through <span className="hero-hl">quantitative data</span>,
              exploring the relationship between space and humans across{' '}
              <span className="hero-hl">virtual and physical realities</span>.
            </p>
            <p className="hero-phil">
              Space is not merely a backdrop, but an active medium that embodies
              emotion and guides experience. By crossing the boundaries between
              technology and art, engineering and the humanities, I strive to
              design spatial experiences that resonate more deeply with people.
            </p>
            <div className="hero-bottom">
              <div className="hero-tags">
                {keywords.map((k) => (
                  <span key={k}>{k}</span>
                ))}
              </div>
              <p className="hero-links">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    {...(l.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {l.label}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-ticker-wrap">
        <RecentTicker />
      </div>
    </div>
  );
};
