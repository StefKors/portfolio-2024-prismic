import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';

import { CodeBlock } from '@/components/CodeBlock';

import styles from './index.module.css';

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */

const textComponents: JSXMapSerializer = {
  // TODO: this is broken but getting there....
  preformatted: ({ text }) => (
    <CodeBlock content={text ?? 'test'} lang={'swift'} />
  ),
};
const TextBlock = ({ slice }: TextBlockProps) => {
  return (
    <section
      className={styles.content}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.content}
        components={textComponents}
      />
    </section>
  );
};

export default TextBlock;
