import React from "react";
import IssueCard from "../components/IssueCard";

export default function Dashboard({ issues = [], setIssues }) {

  const updateStatus = (id, status) => {
    setIssues((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status } : i))
    );
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {issues.length === 0 ? (
        <p>No issues yet</p>
      ) : (
        issues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
            onStatusChange={updateStatus}
          />
        ))
      )}
    </div>
  );
}