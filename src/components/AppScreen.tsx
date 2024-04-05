import AppScreenIOS from "@/components/AppScreenIOS";
import AppScreenMacOS from "@/components/AppScreenMacOS";
import {ProjectsDocument} from "../../prismicio-types";

interface AppScreenProps {
    appPreview: ProjectsDocument
}

const AppScreen = ({appPreview}: AppScreenProps) => {
    const slice = appPreview?.data?.slices?.find((slice) => {
        return slice.slice_type == "app_window_screenshot"
    })

    if (!slice) return

    // TODO: Support web
    const device = slice?.primary?.device ?? "MacOS"

    if (device == "iOS") {
        return <AppScreenIOS slice={slice} />
    }

    // Fallback to MacOS as default
    return <AppScreenMacOS slice={slice} />
}

export default AppScreen