import path from 'node:path';

import { SliceZone } from '@prismicio/react';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

import { getAllArticles } from '@/app/utils/getAllArticles';
import { bufferToMarkdown } from '@/app/utils/markdown';
import { ArticleList } from '@/components/ArticleList';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import styles from './page.module.css';

type Params = { uid: string };

export const dynamic = 'force-static';

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const blogpost = await fetchUniversalArticle(uid).catch(() => notFound());

  return (
    <main>
      <div className={styles.screen}>
        <div className={styles.info}>
          <h1>{blogpost.uid}</h1>

          <article>{blogpost.content}</article>

          <hr />

          <ArticleList />
        </div>
      </div>
    </main>
  );
}

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<Params>;
// }): Promise<Metadata> {
//   const { uid } = await params;
//   const client = createClient();
//   const page = await client.getByUID('blogpost', uid);
//   // .catch(() => notFound());
//
//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map(({ uid }) => {
    return { uid };
  });
}

interface UniversalArticle {
  uid: string;
  content: ReactNode;
}

const fetchUniversalArticle = async (
  uid: string
): Promise<UniversalArticle> => {
  try {
    const client = createClient();
    const blogpost = await client.getByUID('blogpost', uid);
    return {
      uid,
      content: (
        <SliceZone slices={blogpost.data.slices} components={components} />
      ),
    };
  } catch (prismicError) {
    try {
      const fileUrl = path.join(process.cwd(), `src/content/${uid}.md`);
      const markdown = await bufferToMarkdown(await fs.readFile(fileUrl));

      return {
        uid,
        content: (
          <div dangerouslySetInnerHTML={{ __html: String(markdown) }}></div>
        ),
      };
    } catch (markdownError) {
      console.error(markdownError);
      console.error(prismicError);
      throw Error('Failed to fetch markdown content');
    }
  }
};
