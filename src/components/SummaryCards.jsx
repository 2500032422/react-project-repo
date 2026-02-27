const SummaryCards = ({ issues }) => {
  const total = issues.length;
  const open = issues.filter(i => i.status === "Open").length;
  const progress = issues.filter(i => i.status === "In Progress").length;
  const closed = issues.filter(i => i.status === "Closed").length;

  return (
    <div className="summary-grid">
      <div className="summary-card">Total: {total}</div>
      <div className="summary-card">Open: {open}</div>
      <div className="summary-card">In Progress: {progress}</div>
      <div className="summary-card">Closed: {closed}</div>
    </div>
  );
};

export default SummaryCards;