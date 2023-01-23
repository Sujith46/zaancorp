import { Checklist, List } from "@/assets/icons";
import styles from "./StickyActionBtn.module.css";

const StickyActionBtn = () => {
  return (
    <div className={styles.Container}>
      <div className={`${styles.StickyBtn} ${styles.Checklist}`}>
        <Checklist />
      </div>
      <div className={`${styles.StickyBtn} ${styles.List}`}>
        <List />
      </div>
    </div>
  );
};

export default StickyActionBtn;
