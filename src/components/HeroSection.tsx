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

export const HeroSection: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
        {/* Profile Image */}
        <div className="w-full md:w-auto flex-shrink-0">
          <div className="w-full md:w-52 lg:w-56 aspect-[3/4] bg-secondary overflow-hidden">
            <img
              src="/images/profile.png"
              alt="Sun Ah Bae"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio Content - Fits within image height */}
        <div className="flex-1 flex flex-col justify-between py-0">
          <div>
            <p className="text-foreground mb-3 text-sm md:text-base">
              I'm a Ph.D. Student at Future Space Lab, KAIST.
            </p>

            <p className="text-foreground mb-3 leading-relaxed text-justify text-sm md:text-base">
              My research focuses on understanding how spatial experiences are formed through quantitative data. And I explore the relationship between space and humans, and seek new spatial experiences by crossing the boundaries between virtual and physical realities. Currently, I am investigating how the shape of space in virtual exhibition environments influences visitors' emotions, using physiological data and questionnaires.
            </p>

            <p className="text-foreground mb-4 leading-relaxed text-justify text-sm md:text-base">
              Space is not merely a backdrop, but an active medium that embodies emotion and guides experience. By crossing the boundaries between technology and art, engineering and the humanities, I strive to design spatial experiences that resonate more deeply with people.
            </p>
          </div>

          <div>
            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-4">
              {keywords.map((keyword) => (
                <KeywordChip key={keyword} label={keyword} />
              ))}
            </div>

            {/* Icon Links */}
            <div className="flex items-center gap-5">
              <a
                href="https://drive.google.com/file/d/1CpTFSzOtNIyO232ccVjlnij7SeNXd-59/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="CV"
              >
                <img src="/images/icon-cv.png" alt="CV" className="w-6 h-6 object-contain" />
              </a>
              <a
                href="mailto:sa.bae@kaist.ac.kr"
                className="icon-link"
                title="Email"
              >
                <img src="/images/icon-email.png" alt="Email" className="w-6 h-6 object-contain" />
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=5VLxQekAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="Google Scholar"
              >
                <img src="/images/icon-scholar.png" alt="Google Scholar" className="w-6 h-6 object-contain" />
              </a>
              <a
                href="http://www.linkedin.com/in/sunahbae"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                title="LinkedIn"
              >
                <img src="/images/icon-linkedin.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
