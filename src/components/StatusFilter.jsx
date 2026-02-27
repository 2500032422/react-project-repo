const StatusFilter = ({ currentFilter, setFilter }) => {
  return (
    <select
      value={currentFilter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="Closed">Closed</option>
    </select>
  );
};

export default StatusFilter;