import { appScreenimageSize } from '@/app/utils/AppScreenimageSize';
import { ThemeDependentImage } from '@/components/ThemeDependentImage';

import { ProjectsDocumentDataSlicesSlice } from '../../prismicio-types';

interface AppScreenMacOSProps {
  slice: ProjectsDocumentDataSlicesSlice;
}

// const MAX_MACOS_HEIGHT = 2800;

export const AppScreenMacOS = ({ slice }: AppScreenMacOSProps) => {
  // @ts-ignore
  const sliceLight = slice?.primary?.light;
  // @ts-ignore
  const sliceDark = slice?.primary?.dark;

  // const maxWidthStr = appScreenImageSizeStr(sliceLight?.dimensions?.width);
  // const maxHeightStr = appScreenImageSizeStr(sliceLight?.dimensions?.height);

  const maxWidth = appScreenimageSize(sliceLight?.dimensions?.width);
  const maxHeight = appScreenimageSize(sliceLight?.dimensions?.height);

  const lightUrl = sliceLight?.url;
  const darkUrl = sliceDark?.url;

  // <div style={{maxWidth: maxWidthStr, maxHeight: maxHeightStr}}>
  // </div>
  return (
    <ThemeDependentImage
      lightUrl={lightUrl}
      darkUrl={darkUrl}
      width={maxWidth}
      height={maxHeight}
    />
  );
};
