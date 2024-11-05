import path from 'node:path';

import { promises as fs } from 'fs';
import { BlogpostDocument } from 'prismicio-types';

// import { truncate } from 'hast-util-truncate';
import { markdown, MetaData } from '@/app/utils/markdown';
import { createClient } from '@/prismicio';

interface ArticleData extends MetaData {
  uid: string;
}

interface TruncateOptions {
  ellipsis: string;
  size: number;
}

interface PrismicText {
  type: string;
  text: string;
}

const truncate = (elements: PrismicText[], options: TruncateOptions) => {
  let description = '';
  for (const element of elements) {
    description += ` ${element.text}`;
    if (description.length > options.size) {
      break;
    }
  }

  return description.substring(0, options.size) + options.ellipsis;
};

const getDescription = (page: BlogpostDocument) => {
  const contentSlice = page.data.slices.find(
    (slice) => slice.slice_type == 'text_block'
  );
  const elements = (contentSlice?.primary.content ?? []) as PrismicText[];
  return truncate(elements, {
    size: 140,
    ellipsis: '...',
  });
};

export const getAllArticles = async () => {
  const metas: ArticleData[] = [];

  // Files
  const directory = path.join(process.cwd(), 'src/content');
  const files = await fs.readdir(directory);

  for (const fileName of files) {
    const meta = await markdown(
      await fs.readFile(path.join(directory, fileName))
    );
    metas.push({
      uid: fileName.replace(/\.md$/, ''),
      ...meta,
    });
  }

  // Prismic
  const client = createClient();
  const pages = await client.getAllByType('blogpost');

  for await (const page of pages) {
    console.log();
    // console.log(text);
    metas.push({
      uid: page.uid,
      title: page.data.meta_title ?? page.data.title ?? page.uid,
      description: page.data.meta_description ?? getDescription(page),
    });
  }

  return metas;
};
