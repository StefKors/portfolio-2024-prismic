import {appScreenimageSize} from "@/utils/AppScreenimageSize";

export const appScreenImageSizeStr = (size: number | undefined | null): string => {
    return `${appScreenimageSize(size)}px`;
};
