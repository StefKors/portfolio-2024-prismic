import {ProjectsDocumentDataSlicesSlice} from "../../prismicio-types";
import {PrismicImage} from "@prismicio/react";
import styles from "./AppIcon.module.css"
import React from "react";

interface AppIconProps extends React.HTMLProps<HTMLDivElement> {
    slice?: ProjectsDocumentDataSlicesSlice
}

const AppIcon = ({slice, ...props}: AppIconProps) => {
    return (
        <div className={styles.appIconGridCell} {...props}>
            <div className={styles.appIconWrapper}>
                <PrismicImage
                    // @ts-ignore
                    field={slice?.primary?.icon}
                    className={styles.appIcon}
                />
            </div>
        </div>
    )
}

export default AppIcon