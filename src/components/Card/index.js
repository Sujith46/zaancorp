import Image from "next/image";

import UserAvatar from "../../assets/images/avatars/user-avatar.png";

import { Description, UserStar } from "@/assets/icons";

import styles from "./Card.module.css";

const Card = ({ headerText, mainText, color, tags }) => {
  const tagColor = ["#FFEEDE", "#FFDEFC"];
  return (
    <div className={styles.Container}>
      <div className={styles.CardHeader}>
        <div className={styles.CardHeaderInfo}>
          <div
            className={styles.CardHeaderInfoColor}
            style={{ backgroundColor: color }}
          ></div>
          <div className={styles.CardHeaderInfoText}>{headerText}</div>
        </div>
        <UserStar />
      </div>
      <div className={styles.CardInfoText}>{mainText}</div>
      <div className={styles.CardTags}>
        {tags.map((item, index) => (
          <div
            className={styles.TagColorText}
            key={index}
            style={{ backgroundColor: tagColor[index] }}
          >
            {item}
          </div>
        ))}
      </div>
      <Description />
      <div className={styles.CardActions}></div>
      <div className={styles.CardFooter}>
        <div className={styles.CreatedDateText}>Created 3 days ago</div>
        <Image src={UserAvatar} alt="avatar" width="18" height="18"/>
      </div>
    </div>
  );
};

export default Card;
