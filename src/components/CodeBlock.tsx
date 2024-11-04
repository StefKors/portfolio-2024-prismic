import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { codeToHast } from 'shiki';

import styles from './CodeBlock.module.css';

export const CodeBlock = async ({ content }: { content: string }) => {
  const out = await codeToHast(content, {
    lang: 'ts',
    theme: 'plastic',
  });

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      // your custom `pre` element
      pre: (props) => (
        <div className={styles.codeblock}>
          <pre data-custom-codeblock {...props} />
        </div>
      ),
    },
  });
};
