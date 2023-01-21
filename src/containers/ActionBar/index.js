import PersonOne from "../../assets/images/userInfoAvatars/person-one.png";
import PersonTwo from "../../assets/images/userInfoAvatars/person-two.png";
import PersonThree from "../../assets/images/userInfoAvatars/person-three.png";
import PersonFour from "../../assets/images/userInfoAvatars/person-four.png";

import UserInfo from "@/components/UserInfo";
import EditorActionsInfo from "../EditorActionsInfo";

import styles from "./ActionBar.module.css";
import ActionIcon from "@/components/ActionIcon";
import { Pinned } from "@/assets/icons";
import WorkflowActions from "../WorkflowActions";

const ActionBar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftCol}>
        <div className={styles.Heading}>Workflow</div>
        <div className={styles.UserInfo}>
          <EditorActionsInfo />
          <div className={styles.Divider}></div>
          <div className={styles.UserList}>
            <UserInfo avatar={PersonOne} userInfoNumber="2" />
            <UserInfo avatar={PersonTwo} userInfoNumber="5" />
            <UserInfo avatar={PersonThree} userInfoNumber="1" />
            <UserInfo avatar={PersonFour} userInfoNumber="4" />
          </div>
        </div>
      </div>
      <div className={styles.RightCol}>
        <WorkflowActions />
      </div>
    </div>
  );
};

export default ActionBar;
