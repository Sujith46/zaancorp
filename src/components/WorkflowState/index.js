import { Filter, MenuDot } from "@/assets/icons";
import { SortBy } from "@/assets/icons/SortBy";
import AddCard from "../AddCard";
import styles from "./WorkflowState.module.css";

const WorkflowState = ({
  stateText,
  itemCount,
  children,
  isOpen,
  setIsOpen,
  handleAddNewCard,
}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.WorkflowInfo}>
        <div className={styles.InfoContainer}>
          <div className={styles.Info}>
            <span className={styles.InfoText}>{stateText}</span>
            <span className={styles.CountInfo}>({itemCount})</span>
          </div>
          <div className={styles.Filters}>
            <Filter />
            <SortBy />
          </div>
        </div>
        <MenuDot />
      </div>
      <div className={styles.CardContainerScrollable}>{children}</div>
      <AddCard isOpen={isOpen} setIsOpen={setIsOpen} handleAddNewCard={handleAddNewCard} />
    </div>
  );
};

export default WorkflowState;
