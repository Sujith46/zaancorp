import ActionBar from "../ActionBar";
import NavBar from "../NavBar";
import styles from "./Workflow.module.css";

const Workflow = () => {
  return (
    <div className={styles.Container}>
      <NavBar />
      <ActionBar />
    </div>
  );
};

export default Workflow;
