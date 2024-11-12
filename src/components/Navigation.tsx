import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

export const Navigation = async () => {
  const client = createClient();
  const navigation = await client.getSingle('navigation');
  console.log(navigation);
  return (
    <nav>
      <SliceZone slices={navigation.data.slices} components={components} />
    </nav>
  );
};
