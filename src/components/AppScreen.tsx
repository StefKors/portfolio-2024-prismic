import { AppScreenIOS } from '@/components/AppScreenIOS';
import { AppScreenMacOS } from '@/components/AppScreenMacOS';

import { ProjectsDocumentDataSlicesSlice } from '../../prismicio-types';
import styles from './AppScreen.module.css';

interface AppScreenProps {
  slice?: ProjectsDocumentDataSlicesSlice;
}

export const AppScreen = ({ slice }: AppScreenProps) => {
  if (!slice) {
    return;
  }

  // TODO: Support web
  // @ts-ignore
  const device = slice?.primary?.device ?? 'MacOS';

  if (device == 'iOS') {
    return (
      <div className={styles.appScreen}>
        <AppScreenIOS slice={slice} />
      </div>
    );
  }

  // Fallback to MacOS as default
  return (
    <div className={styles.appScreen}>
      <AppScreenMacOS slice={slice} />
    </div>
  );
};
