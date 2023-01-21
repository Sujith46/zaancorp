import { Pinned, File, Save, Filter } from "@/assets/icons";
import { SortBy } from "@/assets/icons/SortBy";
import ActionIcon from "@/components/ActionIcon";
import styles from "./WorkflowActions.module.css";

const WorkflowActions = () => {
  return (
    <div className={styles.Container}>
      <ActionIcon className={styles.CustomActionBtn}>
        <Pinned />
      </ActionIcon>
      <ActionIcon className={styles.CustomActionBtn}>
        <File />
      </ActionIcon>
      <ActionIcon>
        <div className={styles.ActionContent}>
          <Save />
          <span>Views</span>
        </div>
      </ActionIcon>
      <ActionIcon>
        <div className={styles.ActionContent}>
          <Filter />
          <span>Filter</span>
        </div>
      </ActionIcon>
      <ActionIcon>
        <div className={styles.ActionContent}>
          <SortBy />
          <span>Sort by</span>
        </div>
      </ActionIcon>
    </div>
  );
};

export default WorkflowActions;
