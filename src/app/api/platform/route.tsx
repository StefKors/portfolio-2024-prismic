import { NextRequest } from 'next/server';

import {
  generatePlatformVector,
  PlatformSupport,
} from '@/app/utils/generatePlatformVector';

/// `/api/platform?os=macos,ios,ipados,tvos,watchos,visionos`
/// return platform image based on query params included in the `os` search param
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams.get('os') ?? '';
  const platforms = params.split(',');

  const support: PlatformSupport = {
    macos: platforms.includes('macos'),
    ios: platforms.includes('ios'),
    ipados: platforms.includes('ipados'),
    tvos: platforms.includes('tvos'),
    watchos: platforms.includes('watchos'),
    visionos: platforms.includes('visionos'),
  };

  return new Response(generatePlatformVector(support), {
    headers: { 'content-type': 'image/svg+xml' },
  });
}

// export async function generateStaticParams() {
//   const client = createClient('portfolio-stefkors');
//   const pages = await client.getAllByType('showcase');
//
//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
