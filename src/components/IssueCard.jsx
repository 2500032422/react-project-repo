export default function IssueCard({ issue, onStatusChange }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
      <h3>{issue.title}</h3>
      <p>Status: {issue.status}</p>

      <select
        value={issue.status}
        onChange={(e) => onStatusChange(issue.id, e.target.value)}
      >
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
      </select>
    </div>
  );
}