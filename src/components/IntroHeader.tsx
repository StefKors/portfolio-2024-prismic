import styles from "./IntroHeader.module.css";
import {ProjectsDocument, ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";
import AppIcon from "@/components/AppIcon";
import AppScreen from "@/components/AppScreen";
import {PrismicRichText} from "@prismicio/react";
import {Barlow_Condensed, Instrument_Serif} from "next/font/google";

const font = Instrument_Serif({preload: true, weight: "400", subsets: ["latin"]});
const font2 = Barlow_Condensed({preload: true, weight: "300", subsets: ["latin"]});


interface IntroHeaderProps {
    appPreviews: (ProjectsDocument<string> | null)[]
}

interface AppScreensLayerViewProps {
    appScreensLayer: (ProjectsDocumentDataSlicesSlice | undefined)[]
}

function AppScreensLayerView({appScreensLayer}: AppScreensLayerViewProps) {
    return
}

const findScreenshot = (project: ProjectsDocument<string> | null): ProjectsDocumentDataSlicesSlice | undefined => {
    return project?.data?.slices.find(slice => {
        return slice.slice_type == "app_window_screenshot"
    })
}

const ScreenshotView = ({project}: { project: ProjectsDocument<string> | null }) => {
    const screenshot = findScreenshot(project)
    if (screenshot == undefined) {
        return null
    }

    return <AppScreen slice={screenshot}/>
}

const IntroHeader = ({appPreviews}: IntroHeaderProps) => {

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
        <div className={styles.list}>
            {appPreviews.map((project, index) => {
                return (
                    <div key={project!.id + index + "-2"} className={styles.screen}>
                        <div className={styles.app}>
                            <ScreenshotView project={project}/>
                        </div>
                        <div className={styles.info}>
                            <h3 className={font.className}>{project?.data.title}</h3>
                            <div className={font2.className}>
                                <PrismicRichText field={project?.data.description}/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default IntroHeader;