import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for text_block2 (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AppWindowScreenshot;
