import styles from "./RoundedActionBtn.module.css";

const RoundedActionBtn = ({ children }) => {
    return (
        <button className={styles.Container}>
            {children}
        </button>
    )
}

export default RoundedActionBtn;