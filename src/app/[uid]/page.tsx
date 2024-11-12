import { PrismicRichText, SliceZone } from '@prismicio/react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';

import { findSlice } from '@/app/utils/findSlice';
import { AppIcon } from '@/components/AppIcon';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

import styles from './page.module.css';

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

export default async function Page(props: {
  params: Promise<{ uid: string }>;
}) {
  const params = await props.params;
  const uid = params.uid;

  if (uid === undefined) {
    return NextResponse.rewrite(new URL('/404'));
  }

  const client = createClient();
  const page = await client.getByUID('projects', uid).catch(() => notFound());
  const icon = findSlice(page, 'app_icon');
  // console.log('page', page);

  // const project = await client.getByUID('projects', showcase.data.project_link, {
  //   fetchLinks: 'projects.slices',
  // });

  // const linkedProject: Pick<ProjectsDocumentData, 'slices'> =
  //   showcase?.data?.project_link;
  // const slices = linkedProject?.data?.slices ?? [];
  return (
    <main>
      <div className={styles.screen}>
        <div className={styles.info}>
          {/*{project ? <ScreenshotView slices={project.data.slices} /> : null}*/}
          <div className={styles.titleRow}>
            {icon && <AppIcon slice={icon} className={styles.projectIcon} />}
            <div>{page?.data.title}</div>
          </div>
          <PrismicRichText field={page?.data.description} />
          {/*<img className={styles.platform} src={'/api/platform/' + page.uid} />*/}
          {/*<ProjectImage slice={showcase.data.project_link} index={0} slices={} context={}*/}
          {/*<PrismicImage field={showcase.data.preview} />*/}
          {/*<SliceZone slices={showcase?.data.slices} components={components} />*/}
        </div>
        <div className={styles.slices}>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </main>
  );
}

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;

  const client = createClient();

  const page = await client.getByUID('projects', uid).catch(() => notFound());

  return {
    title: page.data.meta_title,

    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('projects');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
