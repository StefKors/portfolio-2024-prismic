import { asHTML, asText, Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeShiki from '@shikijs/rehype';
import rehypeStringify from 'rehype-stringify';

/**
 * Props for `MarkdownText`.
 */
export type MarkdownTextProps = SliceComponentProps<Content.MarkdownTextSlice>;

/**
 * Component for "MarkdownText" Slices.
 */
const MarkdownText = async ({ slice }: MarkdownTextProps): JSX.Element => {
  const file = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    // .use(rehypeSanitize) // Sanitize HTML input
    .use(rehypeShiki, {
      // or `theme` for a single theme
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    })
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(asHTML(slice.primary.content));

  console.log(asText(slice.primary.content));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div dangerouslySetInnerHTML={{ __html: String(file) }}></div>
    </section>
  );
};

export default MarkdownText;
