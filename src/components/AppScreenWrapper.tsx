'use client';
import { motion } from 'framer-motion';
import { RefObject, useState } from 'react';

import { AppScreen } from '@/components/AppScreen';
import { APP_SCREEN_ROTATION, getRotation } from '@/utils/GetRotation';

import { ProjectsDocumentDataSlicesSlice } from '../../prismicio-types';
import styles from './AppScreenWrapper.module.css';

interface AppScreenWrapperProps {
  slice: ProjectsDocumentDataSlicesSlice;
  containerRef: RefObject<HTMLDivElement | null>;
  index: number;
}

export const AppScreenWrapper = ({
  slice,
  containerRef,
  index,
}: AppScreenWrapperProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      drag={isHovering}
      dragMomentum={false}
      dragConstraints={containerRef}
      dragSnapToOrigin={true}
      whileDrag={{
        scale: 1.04,
      }}
      style={{
        pointerEvents: 'all',
        x: getRotation(index, APP_SCREEN_ROTATION) * 4,
        y: getRotation(index, APP_SCREEN_ROTATION) * 17,
      }}
    >
      <div className={styles.container}>
        <AppScreen slice={slice} />
      </div>
    </motion.div>
  );
};
