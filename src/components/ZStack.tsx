import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import styles from './ZStack.module.css';

interface ZStackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ZStack = forwardRef<HTMLDivElement, ZStackProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} className={styles.zstack} {...props}>
      {children}
    </div>
  )
);

ZStack.displayName = 'ZStack';
