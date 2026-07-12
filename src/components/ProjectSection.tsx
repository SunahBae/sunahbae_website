import React, { useRef } from 'react';
import { projects, Project } from '@/data/projects';
import { EditorialRow, SectionScrollbar } from './EditorialList';

const getBadgeUrl = (project: Project, type: 'link' | 'video'): string | undefined =>
  project.badges?.find((b) => b.type === type)?.url;

export const ProjectSection: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <section className="ed-section" id="project">
      <div className="side-col">
        <p className="label">Project</p>
        <SectionScrollbar listRef={listRef} />
      </div>
      <div className="ed-content">
        <div className="ed-list" ref={listRef}>
          <div className="item-list">
            {projects.map((project) => (
              <EditorialRow
                key={project.id}
                title={project.title}
                titleUrl={getBadgeUrl(project, 'link')}
                videoUrl={getBadgeUrl(project, 'video')}
                subline={`${project.role} · ${project.organization} · ${project.year}`}
                thumbnails={project.thumbnails}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
