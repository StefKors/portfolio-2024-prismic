import {imageSizeStr} from "@/utils/imageSizeStr";
import {getImageProps} from "next/image";
import ThemeDependentImage from "@/components/ThemeDependentImage";
import {imageSize} from "@/utils/ImageSize";
import {ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";
import styles from "@/components/AppScreenIOS.module.css";

interface AppScreenMacOSProps {
    slice: ProjectsDocumentDataSlicesSlice
}

const AppScreenMacOS = ({slice}: AppScreenMacOSProps) => {
    const sliceLight = slice?.primary?.light
    const sliceDark = slice?.primary?.dark

    const maxWidthStr = imageSizeStr(sliceLight?.dimensions?.width)
    const maxHeightStr = imageSizeStr(sliceLight?.dimensions?.height)

    const maxWidth = imageSize(sliceLight?.dimensions?.width)
    const maxHeight = imageSize(sliceLight?.dimensions?.height)

    const lightUrl = sliceLight?.url
    const darkUrl = sliceDark?.url

    return (
        <div style={{maxWidth: maxWidthStr, maxHeight: maxHeightStr}}>
            <ThemeDependentImage lightUrl={lightUrl} darkUrl={darkUrl} width={maxWidth} height={maxHeight}/>
        </div>
    )
}

export default AppScreenMacOS