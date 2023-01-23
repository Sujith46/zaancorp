import Card from "@/components/Card";
import WorkflowState from "@/components/WorkflowState";
import { useState } from "react";

import {
  backlogState,
  completedState,
  inProcessState,
  inReviewState,
  todoState,
} from "./cardStates";

import styles from "./WorkflowListing.module.css";

const WorkflowListing = () => {
  const [backlogStateData, setBacklogStateData] = useState(backlogState);
  const [todoStateData, setTodoStateData] = useState(todoState);
  const [inProcessStateData, setInProgressStateData] = useState(inProcessState);
  const [inReviewStateData, setInReviewStateData] = useState(inReviewState);
  const [completedStateData, setCompletedStateData] = useState(completedState);

  return (
    <div className={styles.Container}>
      <WorkflowState stateText="Backlog" itemCount="2">
        {backlogStateData.map((item, index) => (
          <Card
            key={index}
            color={item.color}
            headerText={item.headerText}
            mainText={item.mainText}
            tags={item.tags}
          />
        ))}
      </WorkflowState>
      <WorkflowState stateText="To Do" itemCount="5">
        {todoStateData.map((item, index) => (
          <Card
            key={index}
            color={item.color}
            headerText={item.headerText}
            mainText={item.mainText}
            tags={item.tags}
          />
        ))}
      </WorkflowState>
      <WorkflowState stateText="In Process" itemCount="5">
        {inProcessStateData.map((item, index) => (
          <Card
            key={index}
            color={item.color}
            headerText={item.headerText}
            mainText={item.mainText}
            tags={item.tags}
          />
        ))}
      </WorkflowState>
      <WorkflowState stateText="In Review" itemCount="5">
        {inReviewStateData.map((item, index) => (
          <Card
            key={index}
            color={item.color}
            headerText={item.headerText}
            mainText={item.mainText}
            tags={item.tags}
          />
        ))}
      </WorkflowState>
      <WorkflowState stateText="Completed" itemCount="1">
        {completedStateData.map((item, index) => (
          <Card
            key={index}
            color={item.color}
            headerText={item.headerText}
            mainText={item.mainText}
            tags={item.tags}
          />
        ))}
      </WorkflowState>
    </div>
  );
};

export default WorkflowListing;
