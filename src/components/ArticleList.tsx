import { PrismicNextLink } from '@prismicio/next';

import { createClient } from '@/prismicio';

export const ArticleList = async () => {
  const client = createClient();
  const articles = await client.getAllByType('blogpost');

  return (
    <div>
      <h1>Writing</h1>
      <ol>
        {articles.map((post) => (
          <li key={post.id}>
            <PrismicNextLink href={post.url ?? ''}>
              {post.data.title}
            </PrismicNextLink>
          </li>
        ))}
      </ol>
    </div>
  );
};
