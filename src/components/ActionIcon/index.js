import styles from "./ActionIcon.module.css";

const ActionIcon = ({ children, className }) => {
    return (
        <div className={`${styles.Container} ${className ?? ""}`}>
            {children}
        </div>
    )
}

export default ActionIcon;