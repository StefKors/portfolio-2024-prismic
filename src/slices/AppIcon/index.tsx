import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import type { HTMLProps, JSX } from 'react';

/**
 * Props for `AppIcon`.
 */
export type AppIconProps = SliceComponentProps<Content.AppIconSlice> &
  HTMLProps<HTMLDivElement>;

/**
 * Component for "AppIcon" Slices.
 */
const AppIcon = ({ slice, className, ...props }: AppIconProps): JSX.Element => {
  return null; //<AppIcon slice={slice} {...props} />;
};

export default AppIcon;
