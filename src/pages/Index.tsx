import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FilterBar, FilterType } from '@/components/FilterBar';
import { SectionTitle } from '@/components/SectionTitle';
import { PublicationCard } from '@/components/PublicationCard';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceCard } from '@/components/ExperienceCard';
import { TechnicalContributionCard } from '@/components/TechnicalContributionCard';
import { DesignCard } from '@/components/DesignCard';
import { ArtWorkCard } from '@/components/ArtWorkCard';
import { AwardCard } from '@/components/AwardCard';
import { ScholarshipItem } from '@/components/ScholarshipItem';
import { Footer } from '@/components/Footer';

import { publications } from '@/data/publications';
import { projects } from '@/data/projects';
import { experiences } from '@/data/experience';
import { technicalContributions } from '@/data/technicalContributions';
import { designItems } from '@/data/design';
import { artworks } from '@/data/artwork';
import { awards } from '@/data/awards';
import { scholarships } from '@/data/scholarships';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const showPublication = activeFilter === 'all' || activeFilter === 'publication';
  const showProject = activeFilter === 'all' || activeFilter === 'project';
  const showEct = activeFilter === 'all' || activeFilter === 'ect';

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        
        <HeroSection />
        
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        {/* PUBLICATION Section */}
        {showPublication && (
          <section className="py-8">
            <SectionTitle title="PUBLICATION" />
            <div>
              {publications.map((pub) => (
                <PublicationCard key={pub.id} publication={pub} />
              ))}
            </div>
          </section>
        )}

        {/* PROJECT Section */}
        {showProject && (
          <section className="py-8">
            <div className="section-divider mb-8" />
            <SectionTitle title="PROJECT" />
            <div>
              {projects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </section>
        )}

        {/* EXPERIENCE Section (Ect) */}
        {showEct && (
          <>
            <section className="py-8">
              <div className="section-divider mb-8" />
              <SectionTitle title="EXPERIENCE" />
              <div>
                {experiences.map((exp) => (
                  <ExperienceCard key={exp.id} experience={exp} />
                ))}
              </div>
            </section>

            {/* TECHNICAL CONTRIBUTION FOR ARTWORKS Section */}
            <section className="py-8">
              <div className="section-divider mb-8" />
              <SectionTitle title="TECHNICAL CONTRIBUTION FOR ARTWORKS" />
              <div>
                {technicalContributions.map((item) => (
                  <TechnicalContributionCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* DESIGN Section */}
            <section className="py-8">
              <div className="section-divider mb-8" />
              <SectionTitle title="DESIGN" />
              <div>
                {designItems.map((item) => (
                  <DesignCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* ART WORK Section */}
            <section className="py-8">
              <div className="section-divider mb-8" />
              <SectionTitle title="ART WORK" />
              <div>
                {artworks.map((item) => (
                  <ArtWorkCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* AWARD AND HONOR Section */}
            <section className="py-8">
              <div className="section-divider mb-8" />
              <SectionTitle title="AWARD AND HONOR" />
              <div>
                {awards.map((award) => (
                  <AwardCard key={award.id} award={award} />
                ))}
              </div>
            </section>

            {/* SCHOLARSHIP Section */}
            <section className="py-8">
              <div className="section-divider mb-8" />
              <SectionTitle title="SCHOLARSHIP" />
              <ul className="space-y-2">
                {scholarships.map((scholarship) => (
                  <ScholarshipItem key={scholarship.id} scholarship={scholarship} />
                ))}
              </ul>
            </section>
          </>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Index;
