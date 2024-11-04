// @ts-ignore
import { buildURL } from 'imgix-url-builder';
import { memo } from 'react';

import { ZStack } from '@/components/ZStack';

import styles from './ThemeDependentImage.module.css';

const defaultURL = (
  url: string | undefined | null,
  width: number,
  dpr: number = 2
) => {
  return buildURL(url, {
    fm: 'avif',
    auto: 'none',
    q: 70,
    w: width,
    dpr: dpr,
  });
};

// const generateSrcSet = (url: string | undefined | null, width: number) => {
//   return [1, 2, 3]
//     .map((number) => {
//       return `${defaultURL(url, width, number)} ${number}x`;
//     })
//     .join(', \n');
// };

interface ThemeDependentImageProps {
  alt?: string;
  width: number;
  height: number;
  lightUrl?: string | null;
  darkUrl?: string | null;
}

const InternalThemeDependentImage = ({
  alt = '',
  width,
  lightUrl,
  darkUrl,
}: ThemeDependentImageProps) => {
  const anyUrl = lightUrl ?? darkUrl;

  if (!anyUrl) {
    return;
  }

  // TODO?
  // const dataUrl = await dynamicBlurDataUrl(buildURL(darkUrl, {fm: "webp", auto: "none", q: 1, w: 40 }))

  return (
    <ZStack>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.onlyOnLight}
        alt={alt}
        src={defaultURL(lightUrl ?? anyUrl, width)}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.onlyOnDark}
        alt={alt}
        src={defaultURL(darkUrl ?? anyUrl, width)}
      />
    </ZStack>
  );
};

export const ThemeDependentImage = memo(InternalThemeDependentImage);
