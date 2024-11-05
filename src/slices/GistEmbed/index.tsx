import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import type { JSX } from 'react';

/**
 * Props for `Embed`.
 */
export type EmbedProps = SliceComponentProps<Content.EmbedSlice>;

/**
 * Component for "Embed" Slices.
 */
const Embed = ({ slice }: EmbedProps): JSX.Element => {
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

export default Embed;
