import { Content } from '@prismicio/client';
import { PrismicImage, SliceComponentProps } from '@prismicio/react';
import type { JSX } from 'react';

import styles from '@/components/AppIcon.module.css';

/**
 * Props for `ProjectImage`.
 */
export type ProjectImageProps = SliceComponentProps<Content.ProjectImageSlice>;

/**
 * Component for "ProjectImage" Slices.
 */
const ProjectImage = ({ slice }: ProjectImageProps): JSX.Element => {
  return (
    <PrismicImage
      field={slice?.primary.url}
      className={styles.appIcon}
      imgixParams={{
        q: 70,
        w: 80,
        fm: 'avif',
        dpr: 2,
      }}
    />
  );
};

export default ProjectImage;
