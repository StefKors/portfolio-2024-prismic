import { NextRequest } from 'next/server';

import { createClient } from '@/prismicio';
import {
  generatePlatformVector,
  PlatformSupport,
} from '@/utils/generatePlatformVector';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  const client = createClient();
  const showcases = await client.getAllByType('showcase');

  return showcases.map((showcase) => ({
    uid: showcase.uid,
  }));
}

// https://nextjs.org/docs/app/api-reference/functions/image-response
export async function GET(
  _request: NextRequest,
  { params }: { params: { uid: string } }
) {
  const client = createClient();
  const showcase = await client.getByUID('showcase', params.uid);

  const support: PlatformSupport = {
    macos: false,
    ios: false,
    ipados: false,
    tvos: false,
    watchos: false,
    visionos: false,
    ...showcase?.data?.platform_support?.[0],
  };

  return new Response(generatePlatformVector(support), {
    headers: { 'content-type': 'image/svg+xml' },
  });
}
