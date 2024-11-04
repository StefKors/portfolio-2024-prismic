import { AppIcon } from '@/components/AppIcon';
import styles from '@/components/ProjectGrid.module.css';

import {
  ProjectsDocument,
  ProjectsDocumentDataSlicesSlice,
} from '../../prismicio-types';

const findAppIcon = (
  project: ProjectsDocument<string> | null
): ProjectsDocumentDataSlicesSlice | undefined => {
  return project?.data?.slices.find((slice) => {
    return slice.slice_type == 'app_icon';
  });
};

export const AppIconView = ({
  project,
}: {
  project: ProjectsDocument<string>;
}) => {
  const icon = findAppIcon(project);
  if (icon == undefined) {
    return null;
  }

  return <AppIcon slice={icon} className={styles.projectIcon} />;
};
