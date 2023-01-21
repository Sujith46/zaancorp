import { Announcement, Code, Design, Workflow } from "@/assets/icons";
import RoundedActionBtn from "@/components/RoundedActionBtn";
import styles from "./EditorActions.module.css";

const EditorActionsInfo = () => {
  return (
    <div className={styles.Container}>
      <button className={styles.StatusBtn}>
        <Workflow color="#FFFFFF" />
      </button>
      <RoundedActionBtn>
        <Design />
      </RoundedActionBtn>
      <RoundedActionBtn>
        <Code />
      </RoundedActionBtn>
      <RoundedActionBtn>
        <Announcement />
      </RoundedActionBtn>
    </div>
  );
};

export default EditorActionsInfo;
