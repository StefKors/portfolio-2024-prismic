import styles from "./AppScreenIOS.module.css";
import {imageSizeStr} from "@/utils/imageSizeStr";
import {imageSize} from "@/utils/ImageSize";
import ThemeDependentImage from "@/components/ThemeDependentImage";
import {ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";

interface AppScreenIOSProps {
    slice: ProjectsDocumentDataSlicesSlice
}

const AppScreenIOS = ({slice}: AppScreenIOSProps) => {
    const sliceLight = slice?.primary?.light
    const sliceDark = slice?.primary?.dark

    const maxWidthStr = imageSizeStr(sliceLight?.dimensions?.width)
    const maxHeightStr = imageSizeStr(sliceLight?.dimensions?.height)

    const maxWidth = imageSize(sliceLight?.dimensions?.width)
    const maxHeight = imageSize(sliceLight?.dimensions?.height)

    const lightUrl = sliceLight?.url
    const darkUrl = sliceDark?.url

    return (
        <div
            className={[styles.appScreen, styles.zstack].join(" ")}
            style={{maxWidth: maxWidthStr, maxHeight: maxHeightStr}}
        >
            <div className={styles.screenshot}>
            <ThemeDependentImage lightUrl={lightUrl} darkUrl={darkUrl} width={maxWidth} height={maxHeight} />
            </div>
            <div className={styles.iphoneFrame}></div>
        </div>
    )
}

export default AppScreenIOS