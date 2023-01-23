import ActionBar from "../ActionBar";
import NavBar from "../NavBar";
import WorkflowListing from "../WorkflowListing";
import styles from "./Workflow.module.css";

const Workflow = () => {
  return (
    <div className={styles.Container}>
      <NavBar />
      <ActionBar />
      <WorkflowListing />
    </div>
  );
};

export default Workflow;
