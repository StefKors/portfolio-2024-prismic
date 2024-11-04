import { PrismicNextLink } from '@prismicio/next';

import { BlogpostDocument } from '../../prismicio-types';

export function ArticleList({ posts }: { posts: BlogpostDocument<string>[] }) {
  return (
    <div>
      <h1>Writing</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <PrismicNextLink href={post.url ?? ''}>
              {post.data.title}
            </PrismicNextLink>
          </li>
        ))}
      </ol>
    </div>
  );
}
