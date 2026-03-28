import React from "react";

export default function Reports({ issues = [] }) {
  return (
    <div>
      <h2>Reports</h2>

      {issues.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => (
              <tr key={issue.id}>
                <td>{issue.id}</td>
                <td>{issue.title}</td>
                <td>{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}