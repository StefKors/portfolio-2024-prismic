'use client';
import { motion } from 'framer-motion';
import { RefObject, useState } from 'react';

import { getRotation, ICON_ROTATION } from '@/app/utils/GetRotation';
import { AppIcon } from '@/components/AppIcon';
import styles from '@/components/AppScreensOverview.module.css';

import { ProjectsDocumentDataSlicesSlice } from '../../prismicio-types';

interface IconWrapperProps {
  slice: ProjectsDocumentDataSlicesSlice;
  containerRef: RefObject<HTMLDivElement | null>;
  index: number;
}

export const IconWrapper = ({
  slice,
  containerRef,
  index,
}: IconWrapperProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      drag={isHovering}
      dragMomentum={false}
      dragConstraints={containerRef}
      whileDrag={{
        scale: 1.04,
      }}
      style={{
        rotate: getRotation(index, ICON_ROTATION),
        pointerEvents: 'all',
        x: getRotation(index, ICON_ROTATION) * 20,
        y: getRotation(index, ICON_ROTATION) * 20,
      }}
    >
      <AppIcon slice={slice} className={styles.iconRotation} />
    </motion.div>
  );
};
