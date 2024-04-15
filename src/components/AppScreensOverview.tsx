import styles from "./AppScreensOverview.module.css";
import {ProjectsDocument, ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";
import {MouseScrollBehaviourWrapper} from "@/components/MouseScrollBehaviourWrapper";
import AppIcon from "@/components/AppIcon";
import AppScreen from "@/components/AppScreen";

interface AppScreensOverviewProps {
    appPreviews: (ProjectsDocument<string> | null)[]
}

interface AppScreensLayerViewProps {
    appScreensLayer: (ProjectsDocumentDataSlicesSlice | undefined)[]
}

function AppScreensLayerView({appScreensLayer}: AppScreensLayerViewProps) {
    return <div className={styles.appScreensLayer}>
        {appScreensLayer.map((slice, index) => {
            return <AppScreen key={slice!.id + index + "-2"} slice={slice}/>
        })}
    </div>;
}

const AppScreensOverview = ({appPreviews}: AppScreensOverviewProps) => {

    const appScreensLayer = appPreviews.flatMap(preview => {
        return preview?.data?.slices.filter(slice => {
            return slice.slice_type == "app_window_screenshot"
        })
    })

    const appIconsLayer = appPreviews.flatMap(preview => {
        return preview?.data?.slices.filter(slice => {
            return slice.slice_type == "app_icon"
        })
    })

    const topLayer = (
        <div className={styles.appIconsLayer}>
            {[...appIconsLayer, ...appIconsLayer, ...appIconsLayer].map((slice, index) => {
                return <AppIcon key={slice!.id + index} slice={slice} className={styles.iconRotation}/>
            })}
        </div>
    )


    return (
        <MouseScrollBehaviourWrapper topLayer={topLayer}>
            <AppScreensLayerView appScreensLayer={appScreensLayer}/>
        </MouseScrollBehaviourWrapper>
    )
}

export default AppScreensOverview;