import React, { useContext } from "react";
import { IssueContext } from "../context/IssueContext";

const IssueCard = React.memo(({ issue }) => {
  const { updateStatus } = useContext(IssueContext);

  const moveNext = () => {
    if (issue.status === "Open") {
      updateStatus(issue.id, "In Progress");
    } else if (issue.status === "In Progress") {
      updateStatus(issue.id, "Closed");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>{issue.title}</h3>
      <p>Status: {issue.status}</p>
      <p>Priority: {issue.priority}</p>

      {issue.status !== "Closed" && (
        <button onClick={moveNext}>Move to Next Stage</button>
      )}
    </div>
  );
});

export default IssueCard;