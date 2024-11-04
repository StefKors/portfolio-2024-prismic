import { PrismicImage } from '@prismicio/react';
import React from 'react';

import { ProjectsDocumentDataSlicesSlice } from '../../prismicio-types';
import styles from './AppIcon.module.css';

interface AppIconProps extends React.HTMLProps<HTMLDivElement> {
  slice?: ProjectsDocumentDataSlicesSlice;
}

export const AppIcon = ({ slice, className, ...props }: AppIconProps) => {
  return (
    <div className={`${styles.appIconGridCell} ${className}`} {...props}>
      <div className={styles.appIconWrapper}>
        <PrismicImage
          // @ts-ignore
          field={slice?.primary?.icon}
          className={styles.appIcon}
          imgixParams={{
            q: 70,
            w: 80,
            fm: 'avif',
            dpr: 2,
          }}
        />
      </div>
    </div>
  );
};
