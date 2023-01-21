import Image from "next/image";

import styles from "./UserInfo.module.css";

const UserInfo = ({ avatar, userInfoNumber }) => {
    return (
        <div className={styles.Container}>
            <Image src={avatar} alt="avatar" width="30" height="30"/>
            <div className={styles.Number}>{userInfoNumber}</div>
        </div>
    )
}

export default UserInfo;