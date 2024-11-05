import { appScreenimageSize } from '@/app/utils/AppScreenimageSize';

export const appScreenImageSizeStr = (
  size: number | undefined | null
): string => {
  return `${appScreenimageSize(size)}px`;
};
