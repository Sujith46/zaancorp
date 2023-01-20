import { ArrowChervron, DoubleArrow } from "@/assets/icons";

import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <div className={styles.Logo__Content}>
        <div className={styles.Logo__ContentGreenDot}></div>
        <div className={styles.Logo__ContentName}>Zaan Corp</div>
        <ArrowChervron color="#070F21" />
      </div>
      <DoubleArrow />
    </div>
  );
};

export default Logo;
