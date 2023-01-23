import ActionBar from "../ActionBar";
import NavBar from "../NavBar";
import StickyActionBtn from "../StickyActionBtn";
import WorkflowListing from "../WorkflowListing";
import styles from "./Workflow.module.css";

const Workflow = () => {
  return (
    <div className={styles.Container}>
      <NavBar />
      <ActionBar />
      <WorkflowListing />
      <StickyActionBtn />
    </div>
  );
};

export default Workflow;
