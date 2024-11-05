import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import type { JSX } from 'react';

/**
 * Props for `AppIcon`.
 */
export type AppIconProps = SliceComponentProps<Content.AppIconSlice>;

/**
 * Component for "AppIcon" Slices.
 */
const AppIcon = ({ slice }: AppIconProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for app_icon (variation: {slice.variation}) Slices
    </section>
  );
};

export default AppIcon;
