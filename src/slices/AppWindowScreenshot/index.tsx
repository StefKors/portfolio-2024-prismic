import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import type { JSX } from 'react';

import { AppScreen } from '@/components/AppScreen';

/**
 * Props for `AppWindowScreenshot`.
 */
export type AppWindowScreenshotProps =
  SliceComponentProps<Content.AppWindowScreenshotSlice>;

/**
 * Component for "AppWindowScreenshot" Slices.
 */
const AppWindowScreenshot = ({
  slice,
}: AppWindowScreenshotProps): JSX.Element => {
  return <AppScreen slice={slice} />;
};

export default AppWindowScreenshot;
