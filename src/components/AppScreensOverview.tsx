import styles from "./AppScreensOverview.module.css";
import AppScreen from "@/components/AppScreen";
import {ProjectsDocument} from "../../prismicio-types";
import {MouseScrollBehaviourWrapper} from "@/components/MouseScrollBehaviourWrapper";
import AppIcon from "@/components/AppIcon";

interface AppScreensOverviewProps {
    appPreviews: (ProjectsDocument<string> | null)[]
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
            {[...appIconsLayer, ...appIconsLayer, ...appIconsLayer].map((slice) => {
                return <AppIcon key={slice!.id} slice={slice} className={styles.iconRotation}/>
            })}
        </div>
    )


    return (
        <MouseScrollBehaviourWrapper topLayer={topLayer}>
            <div className={styles.appScreensLayer}>
                {[...appScreensLayer, ...appScreensLayer, ...appScreensLayer].map((slice) => {
                    return <AppScreen key={slice!.id + "-2"} slice={slice}/>
                })}
            </div>
        </MouseScrollBehaviourWrapper>
    )
}

export default AppScreensOverview;