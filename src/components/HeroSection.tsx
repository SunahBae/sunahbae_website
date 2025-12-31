import React from 'react';
import { KeywordChip } from './KeywordChip';

const keywords = [
  'Spatial Design',
  'Cultural Space',
  'Spatial Experience',
  'Biosignal',
  'Data Driven Design',
  'VR/AR',
];

interface HeroSectionProps {
  profileImage?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profileImage }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        {/* Profile Image */}
        <div className="w-full md:w-auto flex-shrink-0">
          <div className="w-full md:w-48 lg:w-56 aspect-[3/4] bg-secondary overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Sun Ah Bae"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Profile</span>
              </div>
            )}
          </div>
        </div>

        {/* Bio Content */}
        <div className="flex-1">
          <p className="text-foreground mb-4">
            I'm a{' '}
            <span className="text-muted-foreground">Ph.D. Student at Future Space Lab, KAIST</span>.
          </p>

          <p className="text-foreground mb-4 leading-relaxed">
            My research focuses on understanding how spatial experiences are formed through quantitative data. And I explore the relationship between space and humans, and seek new spatial experiences by crossing the boundaries between virtual and physical realities. Currently, I am investigating how the shape of space in virtual exhibition environments influences visitors' emotions, using physiological data and questionnaires.
          </p>

          <p className="text-foreground mb-6 leading-relaxed">
            Space is not merely a backdrop, but an active medium that embodies emotion and guides experience. By crossing the boundaries between technology and art, engineering and the humanities, I strive to design spatial experiences that resonate more deeply with people.
          </p>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-6">
            {keywords.map((keyword) => (
              <KeywordChip key={keyword} label={keyword} />
            ))}
          </div>

          {/* Icon Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1CpTFSzOtNIyO232ccVjlnij7SeNXd-59/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              title="CV"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </a>
            <a
              href="mailto:sa.bae@kaist.ac.kr"
              className="icon-link"
              title="Email"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6L12 13L2 6" />
              </svg>
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=5VLxQekAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              title="Google Scholar"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
              </svg>
            </a>
            <a
              href="http://www.linkedin.com/in/sunahbae"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
