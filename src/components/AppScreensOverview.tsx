'use client';
import { memo, useRef } from 'react';
import isEqual from 'react-fast-compare';

import { AppScreenWrapper } from '@/components/AppScreenWrapper';
import { IconWrapper } from '@/components/IconWrapper';
import { ZStack } from '@/components/ZStack';

import {
  ProjectsDocument,
  ProjectsDocumentDataSlicesSlice,
} from '../../prismicio-types';
import styles from './AppScreensOverview.module.css';

interface AppScreensOverviewProps {
  appPreviews: ProjectsDocument<string>[];
}

const InternalAppScreensOverview = ({
  appPreviews,
}: AppScreensOverviewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const screens = appPreviews
    .flatMap((preview) => {
      return preview?.data?.slices.filter((slice) => {
        return slice.slice_type == 'app_window_screenshot';
      });
    })
    .filter((item) => {
      return !!item;
    });

  const appIconsLayer = appPreviews
    .flatMap((preview) => {
      return preview?.data?.slices.filter((slice) => {
        return slice.slice_type == 'app_icon';
      });
    })
    .filter((item) => {
      return !!item;
    });

  const icons: ProjectsDocumentDataSlicesSlice[] = [
    ...appIconsLayer,
    ...appIconsLayer,
    ...appIconsLayer,
  ].map((preview, index) => {
    return {
      ...preview,
      id: preview.id + index,
    };
  });

  return (
    <ZStack ref={ref}>
      <h1 className={`${styles.backgroundTitle}`} id={'title'}>
        Stef builds apps, <span>lots of them.</span>
      </h1>

      <div className={styles.appScreensLayer}>
        {screens.map((slice, index) => {
          return (
            <AppScreenWrapper
              key={slice.id}
              slice={slice}
              containerRef={ref}
              index={index}
            />
          );
        })}
      </div>

      <div className={styles.appIconsLayer}>
        {icons.map((slice, index) => {
          return (
            <IconWrapper
              key={slice.id}
              slice={slice}
              containerRef={ref}
              index={index}
            />
          );
        })}
      </div>
    </ZStack>
  );
};

export const AppScreensOverview = memo(InternalAppScreensOverview, isEqual);
