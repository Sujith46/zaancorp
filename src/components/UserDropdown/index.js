import { ArrowChervron } from "@/assets/icons";
import Image from "next/image";

import PersonOne from "../../assets/images/avatars/person-one.png";
import PersonTwo from "../../assets/images/avatars/person-two.png";

import styles from "./UserDropdown.module.css";

const UserDropDown = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.UserList}>
        <div className={styles.UserInfo}>
          <Image src={PersonOne} width="30" height="30" />
          <div className={`${styles.UserNotification} ${styles.Yello}`}>15</div>
        </div>
        <div className={styles.UserDivider}></div>
        <div className={styles.UserInfo}>
          <Image src={PersonTwo} alt="user-avatar" width="30" height="30" />
          <div className={`${styles.UserNotification} ${styles.Purple}`}>
            11
          </div>
        </div>
      </div>
      <div className={styles.UserDropdown}>
        <ArrowChervron />
      </div>
    </div>
  );
};

export default UserDropDown;
