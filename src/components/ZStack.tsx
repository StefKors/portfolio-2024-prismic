import styles from "./ZStack.module.css"

const ZStack = ({children}: {children: JSX.Element[]}) => {

    return (
        <div className={styles.zstack}>{children}</div>
    )
}

export default ZStack