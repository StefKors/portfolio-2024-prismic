'use client';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { useRef } from 'react';

import { ZStack } from '@/components/ZStack';
import { components } from '@/slices';

import {
  ProjectsDocument,
  ProjectsDocumentDataSlicesSlice,
} from '../../prismicio-types';
import styles from './ShowcaseOverview.module.css';

interface AppScreensOverviewProps {
  appPreviews: ProjectsDocument<string>[];
}

export const ShowcaseOverview = ({ appPreviews }: AppScreensOverviewProps) => {
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
        {appPreviews.map((document) => {
          // if (document.data.slices) {
          //   return (
          //     <SliceZone
          //       slices={document.data.slices}
          //       components={components}
          //     />
          //   );
          // }

          return (
            <div key={document.id} className={styles.showcase}>
              <div className={styles.desc}>
                <h2>{document.data.title}</h2>
                <PrismicRichText field={document.data.description} />
              </div>
              <SliceZone
                slices={document.data.slices}
                components={components}
              />
            </div>
          );
          // return (
          //   <AppScreenWrapper
          //     key={slice.id}
          //     slice={slice}
          //     containerRef={ref}
          //     index={index}
          //   />
          // );
        })}
      </div>

      {/*<div className={styles.appIconsLayer}>*/}
      {/*  {icons.map((slice, index) => {*/}
      {/*    return (*/}
      {/*      <IconWrapper*/}
      {/*        key={slice.id}*/}
      {/*        slice={slice}*/}
      {/*        containerRef={ref}*/}
      {/*        index={index}*/}
      {/*      />*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
    </ZStack>
  );
};
