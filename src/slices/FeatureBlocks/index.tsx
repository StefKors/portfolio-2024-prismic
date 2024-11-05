import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import type { JSX } from "react";

/**
 * Props for `FeatureBlocks`.
 */
export type FeatureBlocksProps =
  SliceComponentProps<Content.FeatureBlocksSlice>;

/**
 * Component for "FeatureBlocks" Slices.
 */
const FeatureBlocks = ({ slice }: FeatureBlocksProps): JSX.Element => {
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

export default FeatureBlocks;
