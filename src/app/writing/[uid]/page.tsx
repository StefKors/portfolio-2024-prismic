import { SliceZone } from '@prismicio/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// import rehypeSanitize from 'rehype-sanitize';
// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   // const posts = await fetch('https://.../posts').then((res) => res.json())
//   const client = createClient();
//   const showcases = await client.getAllByType('showcase');
//
//   return showcases.map((showcase) => ({
//     uid: showcase.uid,
//   }));
// }
import { CodeBlock } from '@/components/CodeBlock';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import styles from './page.module.css';

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const blogpost = await client
    .getByUID('blogpost', uid)
    .catch(() => notFound());

  // return <SliceZone slices={page.data.slices} components={components} />;
  // const client = createClient();
  // const blogpost = await client.getByUID('blogpost', uid);
  //
  // // const blogpost = await client.getByID('ZykCOhEAAC4AKH82');
  //
  // // const html = codeToHtml('console.log()', {
  // //   lang: 'ts',
  // //   theme: 'vitesse-dark',
  // //   transformers: [transformerTwoslash()],
  // // });
  // console.log(String(file));
  return (
    <main>
      <div className={styles.screen}>
        <div className={styles.info}>
          <h1>{blogpost.data.title}</h1>

          <article>
            <CodeBlock content={'console.log("Hello World")'} />
          </article>

          <SliceZone slices={blogpost.data.slices} components={components} />
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();
  const page = await client.getByUID('blogpost', uid).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('blogpost');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
