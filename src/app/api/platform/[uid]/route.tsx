import { createClient } from '@prismicio/client';
import { notFound } from 'next/navigation';
import { NextRequest } from 'next/server';

import {
  generatePlatformVector,
  PlatformSupport,
} from '@/app/utils/generatePlatformVector';

export const dynamic = 'force-static';

// https://nextjs.org/docs/app/api-reference/functions/image-response
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ uid: string }> }
) {
  const { uid } = await params;
  const client = createClient('portfolio-stefkors');
  const page = await client.getByUID('showcase', uid).catch(() => {
    return notFound();
  });

  const support: PlatformSupport = {
    macos: false,
    ios: false,
    ipados: false,
    tvos: false,
    watchos: false,
    visionos: false,
    ...page?.data?.platform_support?.[0],
  };

  return new Response(generatePlatformVector(support), {
    headers: { 'content-type': 'image/svg+xml' },
  });
}

export async function generateStaticParams() {
  const client = createClient('portfolio-stefkors');
  const pages = await client.getAllByType('showcase');

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
