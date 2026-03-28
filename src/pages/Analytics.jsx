import React from "react";

export default function Analytics({ issues = [] }) {
  const total = issues.length;
  const open = issues.filter(i => i.status === "Open").length;
  const progress = issues.filter(i => i.status === "In Progress").length;
  const resolved = issues.filter(i => i.status === "Resolved").length;

  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <p>Total Issues: {total}</p>
      <p>Open Issues: {open}</p>
      <p>In Progress: {progress}</p>
      <p>Resolved: {resolved}</p>

      <h3>Status Overview</h3>
      <ul>
        <li>Open → Needs attention</li>
        <li>In Progress → Being worked on</li>
        <li>Resolved → Completed issues</li>
      </ul>
    </div>
  );
}