import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ProjectImage`.
 */
export type ProjectImageProps = SliceComponentProps<Content.ProjectImageSlice>;

/**
 * Component for "ProjectImage" Slices.
 */
const ProjectImage = ({ slice }: ProjectImageProps): JSX.Element => {
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

export default ProjectImage;
