import rehypeShiki from '@shikijs/rehype';
import rehypeInferDescriptionMeta from 'rehype-infer-description-meta';
import rehypeInferTitleMeta from 'rehype-infer-title-meta';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export const bufferToMarkdown = async (file: Buffer) => {
  return await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeShiki, {
      theme: 'plastic',
    })
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(file);
};

export interface MetaData {
  title: string;
  description: string;
}

export const markdown = async (file: Buffer): Promise<MetaData> => {
  const result = await unified()
    .use(remarkParse) // Convert into markdown AST
    .use(remarkRehype) // Transform to HTML AST
    .use(rehypeInferTitleMeta)
    .use(rehypeInferDescriptionMeta)
    .use(rehypeShiki, {
      theme: 'plastic',
    })
    .use(rehypeStringify) // Convert AST into serialized HTML
    .process(file);

  return result.data.meta as MetaData;
};
