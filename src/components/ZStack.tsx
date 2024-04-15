import styles from "./ZStack.module.css"

interface ZStackProps {
    children: React.ReactNode
}

const ZStack = ({children}: ZStackProps) => (
    <div className={styles.zstack}>{children}</div>
)

export default ZStack