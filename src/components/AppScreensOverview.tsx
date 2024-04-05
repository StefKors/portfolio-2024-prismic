import styles from "./AppScreensOverview.module.css";
import {PrismicNextImage} from "@prismicio/next";
import AppScreen from "@/components/AppScreen";
import {ProjectsDocument} from "../../prismicio-types";

interface AppScreensOverviewProps {
    appPreviews: (ProjectsDocument<string> | null)[]
}

const AppScreensOverview = ({appPreviews}: AppScreensOverviewProps) => {
    return (
        <div className={styles.appscreenWrapper}>
            {appPreviews?.flatMap((preview) => {
                if (preview) {
                    return <AppScreen key={preview.id} appPreview={preview}/>
                }
            })}
        </div>
    )
}

export default AppScreensOverview;