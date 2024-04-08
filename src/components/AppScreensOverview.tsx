import styles from "./AppScreensOverview.module.css";
import AppScreen from "@/components/AppScreen";
import {ProjectsDocument} from "../../prismicio-types";
import {MouseScrollBehaviourWrapper} from "@/components/MouseScrollBehaviourWrapper";
import AppIcon from "@/components/AppIcon";

interface AppScreensOverviewProps {
    appPreviews: (ProjectsDocument<string> | null)[]
}

const AppScreensOverview = ({appPreviews}: AppScreensOverviewProps) => {

    const allSlices = appPreviews.flatMap((preview) => {
        return preview?.data?.slices.filter(slice => {
            return ["app_window_screenshot", "app_icon"].includes(slice.slice_type)
        })
    })

    return (
        <MouseScrollBehaviourWrapper>
            <div className={styles.box}>
                {allSlices?.reverse().map((slice) => {
                    if (slice) {
                        if (slice.slice_type == "app_window_screenshot") {
                            return <AppScreen key={slice.id + "-2"} slice={slice}/>
                        } else if (slice.slice_type == "app_icon") {
                            return <AppIcon key={slice.id} slice={slice}/>
                        }
                    }
                })}
            </div>
        </MouseScrollBehaviourWrapper>
    )
}

export default AppScreensOverview;