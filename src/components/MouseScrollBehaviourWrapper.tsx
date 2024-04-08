"use client"
import useMeasure from "react-use-measure";
import {motion, MotionConfig, useMotionValue, useSpring, useTransform} from "framer-motion";
import styles from "@/components/AppScreensOverview.module.css";

export function useSmoothTransform(value, springOptions, transformer) {
    return useSpring(useTransform(value, transformer), springOptions);
}

const transition = {
    type: "spring",
    duration: 0.7,
    bounce: 0.2
};

const spring = {stiffness: 600, damping: 30};

export const MouseScrollBehaviourWrapper = ({children}) => {
    const [ref, bounds] = useMeasure({scroll: false});

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const lightRotateX = useSmoothTransform(mouseX, spring, (value) => {
        return (-value - bounds.width / 2)
    });
    const lightRotateY = useSmoothTransform(mouseY, spring, (value) => {
        return (-value - bounds.height / 2)
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
                    <motion.div
                        className={styles.centerWrapper}
                        style={{
                            x: lightRotateX,
                            y: lightRotateY
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </motion.div>
        </MotionConfig>
    )
}