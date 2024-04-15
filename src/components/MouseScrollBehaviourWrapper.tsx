"use client"
import useMeasure from "react-use-measure";
import {
    LayoutGroup,
    motion,
    MotionConfig,
    MotionValue,
    SpringOptions,
    useMotionValue,
    useSpring,
    useTransform
} from "framer-motion";
import styles from "@/components/AppScreensOverview.module.css";
import ZStack from "@/components/ZStack";
import React from "react";

export function useSmoothTransform(value: MotionValue<number>, springOptions: SpringOptions, transformer: (value: number) => number) {
    return useSpring(useTransform(value, transformer), springOptions);
}

const transition = {
    type: "tween",
    duration: 0.7,
    bounce: 0.2
};

const spring: SpringOptions = {
    stiffness: 160,
    damping: 30
};

interface MouseScrollBehaviourWrapperProps {
    children: React.ReactNode;
    topLayer: React.ReactNode;
}

export const MouseScrollBehaviourWrapper = ({children, topLayer}: MouseScrollBehaviourWrapperProps) => {
    const [ref, bounds] = useMeasure({scroll: false});

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const childrenLightRotateX = useSmoothTransform(mouseX, spring, (value: number) => {
        return (-value - bounds.width / 2)
    });
    const childrenLightRotateY = useSmoothTransform(mouseY, spring, (value: number) => {
        return (-value - bounds.height / 2)
    });

    const topLayerLightRotateX = useSmoothTransform(mouseX, spring, (value: number) => {
        return ((-value - bounds.width / 2))
    });
    const topLayerLightRotateY = useSmoothTransform(mouseY, spring, (value: number) => {
        return ((-value - bounds.height / 2) / 1.5)
    });

    return (
        <MotionConfig transition={transition}>
            <motion.div ref={ref} className={styles.appScreenClipWrapper}>
                <motion.div
                    className={styles.appScreenClipPositioner}
                    onPointerMove={(e) => {
                        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                    }}
                >
                    <ZStack>
                        <motion.div
                            className={styles.centerWrapper}
                            style={{
                                x: childrenLightRotateX,
                                y: childrenLightRotateY,
                            }}
                        >
                            <LayoutGroup id="AppOverviewChildren">
                                {children}
                            </LayoutGroup>
                        </motion.div>
                        <motion.div
                            className={styles.centerWrapper}
                            style={{
                                x: topLayerLightRotateX,
                                y: topLayerLightRotateY
                            }}
                        >
                            {topLayer}
                        </motion.div>
                    </ZStack>
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}