import {ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";
import {PrismicImage} from "@prismicio/react";
import styles from "./AppIcon.module.css"

interface AppIconProps {
    slice?: ProjectsDocumentDataSlicesSlice
}

const AppIcon = ({slice}: AppIconProps) => {
    return (
        <div className={styles.appIconGridCell}>
            <div className={styles.appIconWrapper}>
                <PrismicImage
                    field={slice?.primary?.icon}
                    className={styles.appIcon}
                />
            </div>
        </div>
    )
}

export default AppIcon