import { PrismicImage, SliceZone } from '@prismicio/react';
import { NextResponse } from 'next/server';

import { ScreenshotView } from '@/components/ScreenshotView';
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

export default async function Page({ params }: { params: { uid: string } }) {
  const uid = params.uid;

  if (uid === undefined) {
    return NextResponse.rewrite(new URL('/404'));
  }

  const client = createClient();
  const showcase = await client.getByUID('showcase', uid, {
    fetchLinks: 'projects.slices',
  });

  const linkedProject = showcase?.data?.project_link;

  return (
    <main>
      <div className={styles.screen}>
        <div className={styles.info}>
          {linkedProject ? (
            <ScreenshotView slices={linkedProject?.data?.slices ?? []} />
          ) : null}

          <div className={styles.titleRow}>
            <PrismicImage
              className={styles.projectIcon}
              field={showcase?.data.icon}
            />
            <h3>{showcase?.data.title}</h3>
          </div>
          <img
            className={styles.platform}
            src={'/api/platform/' + showcase.uid}
          />

          {/*<ProjectImage slice={showcase.data.project_link} index={0} slices={} context={}*/}
          {/*<PrismicImage field={showcase.data.preview} />*/}

          <SliceZone slices={showcase?.data.slices} components={components} />
        </div>
      </div>
    </main>
  );
}
