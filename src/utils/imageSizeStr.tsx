import {imageSize} from "@/utils/ImageSize";

export const imageSizeStr = (size: number | undefined | null): string => {
    return `${imageSize(size)}px`;
};
