import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';

import { AppIconView } from '@/components/AppIconView';
import { ScreenshotView } from '@/components/ScreenshotView';

import { ProjectsDocument } from '../../prismicio-types';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  appPreviews: ProjectsDocument<string>[];
}

export const ProjectGrid = ({ appPreviews }: ProjectGridProps) => {
  return (
    <div className={styles.projectGrid}>
      <div className={styles.intro}>
        <h1>Featured work</h1>
        <p></p>
      </div>

      <div className={styles.list}>
        {appPreviews.map((project) => {
          if (!project) {
            return null;
          }

          return (
            <Link key={project.id} href={project.url ?? ''}>
              <div className={styles.screen}>
                <div className={styles.app}>
                  <ScreenshotView slices={project?.data?.slices ?? []} />
                </div>
                <div className={styles.icon}>
                  <img src={'/Arrow.png'} />
                </div>
                <div className={styles.info}>
                  <div className={styles.titleRow}>
                    <AppIconView project={project} />
                    <h3>{project?.data.title}</h3>
                  </div>
                  <div>
                    <PrismicRichText field={project?.data.description} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
