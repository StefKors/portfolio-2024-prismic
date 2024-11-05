import { getAllArticles } from '@/app/utils/getAllArticles';

export const ArticleList = async () => {
  const articles = await getAllArticles();
  // console.log(articles);
  return (
    <div>
      <h1>Writing</h1>
      <ol>
        {articles.map((post) => (
          <li key={post.uid}>
            <b>{post.title}</b>
            <div>{post.description}</div>
            {/*<PrismicNextLink href={'/writing/' + post.uid}>*/}
            {/*<div></div>*/}
            {/*<div></div>*/}
            {/*</PrismicNextLink>*/}
          </li>
        ))}
      </ol>
    </div>
  );
};
