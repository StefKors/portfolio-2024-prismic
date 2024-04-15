import {appScreenImageSizeStr} from "@/utils/AppScreenImageSizeStr";
import ThemeDependentImage from "@/components/ThemeDependentImage";
import {appScreenimageSize} from "@/utils/AppScreenimageSize";
import {ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";

interface AppScreenMacOSProps {
    slice: ProjectsDocumentDataSlicesSlice
}

const MAX_MACOS_HEIGHT = 2800
const AppScreenMacOS = ({slice}: AppScreenMacOSProps) => {
    // @ts-ignore
    const sliceLight = slice?.primary?.light
    // @ts-ignore
    const sliceDark = slice?.primary?.dark

    const ogHeight = sliceLight?.dimensions?.height
    const finalHeight = Math.min(ogHeight, MAX_MACOS_HEIGHT)

    const finalWidth = (((100 / ogHeight) * finalHeight) / 100) * sliceLight?.dimensions?.width
    const maxWidthStr = appScreenImageSizeStr(finalWidth)
    const maxHeightStr = appScreenImageSizeStr(finalHeight)

    const maxWidth = appScreenimageSize(finalWidth)
    const maxHeight = appScreenimageSize(finalHeight)
    console.log(ogHeight, finalHeight, finalWidth, maxWidthStr, maxHeightStr)

    const lightUrl = sliceLight?.url
    const darkUrl = sliceDark?.url

    return (
        <div style={{maxWidth: maxWidthStr, maxHeight: maxHeightStr}}>
            <ThemeDependentImage lightUrl={lightUrl} darkUrl={darkUrl} width={maxWidth} height={maxHeight}/>
        </div>
    )
}

export default AppScreenMacOS