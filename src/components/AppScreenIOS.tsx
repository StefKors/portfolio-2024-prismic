import { ThemeDependentImage } from '@/components/ThemeDependentImage';

import { ProjectsDocumentDataSlicesSlice } from '../../prismicio-types';
import styles from './AppScreenIOS.module.css';

interface AppScreenIOSProps {
  slice: ProjectsDocumentDataSlicesSlice;
}

const MAX_IOS_WIDTH = 300;

export const AppScreenIOS = ({ slice }: AppScreenIOSProps) => {
  // @ts-ignore
  const sliceLight = slice?.primary?.light;
  // @ts-ignore
  const sliceDark = slice?.primary?.dark;

  const ogWidth = sliceLight?.dimensions?.width;
  const finalWidth = Math.min(ogWidth, MAX_IOS_WIDTH);

  const finalHeight =
    (((100 / ogWidth) * finalWidth) / 100) * sliceLight?.dimensions?.height;

  const maxWidthStr = finalWidth + 'px';
  const maxHeightStr = finalHeight + 'px';

  const maxWidth = finalWidth;
  const maxHeight = finalHeight;

  const lightUrl = sliceLight?.url;
  const darkUrl = sliceDark?.url;

  return (
    <div
      className={[styles.appScreen, styles.zstack].join(' ')}
      style={{ maxWidth: maxWidthStr, maxHeight: maxHeightStr }}
    >
      <div className={styles.screenshot}>
        <ThemeDependentImage
          lightUrl={lightUrl}
          darkUrl={darkUrl}
          width={maxWidth}
          height={maxHeight}
        />
      </div>
      <div className={styles.iphoneFrame}></div>
    </div>
  );
};
