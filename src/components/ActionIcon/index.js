import styles from "./ActionIcon.module.css";

const ActionIcon = ({ children }) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}

export default ActionIcon;