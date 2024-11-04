import { AppScreen } from '@/components/AppScreen';

import { ProjectsDocumentDataSlicesSlice } from '../../prismicio-types';

const findScreenshot = (
  slices: ProjectsDocumentDataSlicesSlice[]
): ProjectsDocumentDataSlicesSlice | undefined => {
  return slices.find((slice) => {
    return slice.slice_type == 'app_window_screenshot';
  });
};

export const ScreenshotView = ({
  slices,
}: {
  slices: ProjectsDocumentDataSlicesSlice[];
}) => {
  const screenshot = findScreenshot(slices);
  if (screenshot == undefined) {
    return null;
  }

  return <AppScreen slice={screenshot} />;
};
