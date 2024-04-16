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

    const maxWidthStr = appScreenImageSizeStr(sliceLight?.dimensions?.width)
    const maxHeightStr = appScreenImageSizeStr(sliceLight?.dimensions?.height)

    const maxWidth = appScreenimageSize(sliceLight?.dimensions?.width)
    const maxHeight = appScreenimageSize(sliceLight?.dimensions?.height)

    const lightUrl = sliceLight?.url
    const darkUrl = sliceDark?.url

    return (
        // <div style={{maxWidth: maxWidthStr, maxHeight: maxHeightStr}}>
        <ThemeDependentImage lightUrl={lightUrl} darkUrl={darkUrl} width={maxWidth} height={maxHeight}/>
        // </div>
    )
}

export default AppScreenMacOS