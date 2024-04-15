import AppScreenIOS from "@/components/AppScreenIOS";
import AppScreenMacOS from "@/components/AppScreenMacOS";
import {ProjectsDocument, ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";

interface AppScreenProps {
    slice?: ProjectsDocumentDataSlicesSlice
}

const AppScreen = ({slice}: AppScreenProps) => {
    if (!slice) return

    // TODO: Support web
    // @ts-ignore
    const device = slice?.primary?.device ?? "MacOS"

    if (device == "iOS") {
        return <AppScreenIOS slice={slice} />
    }

    // Fallback to MacOS as default
    return <AppScreenMacOS slice={slice} />
}

export default AppScreen