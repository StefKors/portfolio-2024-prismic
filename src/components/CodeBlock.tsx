import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { codeToHast } from 'shiki';

interface CodeBlockProps {
  content: string;
  lang: string;
}

export const CodeBlock = async ({ content, lang }: CodeBlockProps) => {
  const out = await codeToHast(content, {
    lang: lang,
    theme: 'plastic',
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    // components: {
    //   // your custom `pre` element
    //   pre: (props) => (
    //     <div className={styles.codeblock}>
    //       <pre {...props} />
    //     </div>
    //   ),
    // },
  });
};
