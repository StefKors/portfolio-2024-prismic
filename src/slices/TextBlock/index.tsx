import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import styles from './index.module.css';
import { JSXMapSerializer } from '@prismicio/react/src/types';
import { CodeBlock } from '@/components/CodeBlock';

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */

const textComponents: JSXMapSerializer = {
  // TODO: this is broken but getting there....
  preformatted: ({ children }) => <CodeBlock content={} />,
};
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
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
