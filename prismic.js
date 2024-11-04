const routes = [
  // Resolves the Homepage document to "/"
  {
    type: 'homepage',
    path: '/',
  },
  // Resolves Showcase documents to URLs like "/about" and "/blog"
  {
    type: 'showcase',
    path: '/:uid',
  },
  // Resolves BlogPost documents to URLs like "/about" and "/blog"
  {
    type: 'blogpost',
    path: '/blog/:uid',
  },
];
