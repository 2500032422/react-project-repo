import { useContext, useState, useMemo } from "react";
import { IssueContext } from "../context/IssueContext";
import IssueCard from "../components/IssueCard";
import StatusFilter from "../components/StatusFilter";
import SummaryCards from "../components/SummaryCards";
import SearchBar from "../components/SearchBar";


const Dashboard = () => {
  const { issues, loading, error } = useContext(IssueContext);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredIssues = useMemo(() => {
    return issues
      .filter(issue => 
        filter === "All" || issue.status === filter
      )
      .filter(issue =>
        issue.title.toLowerCase().includes(search.toLowerCase())
      );
  }, [issues, filter, search]);

  if (loading) return <p className="container">Loading...</p>;
  if (error) return <p className="container">{error}</p>;

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <SummaryCards issues={issues} />

      <SearchBar search={search} setSearch={setSearch} />

      <StatusFilter currentFilter={filter} setFilter={setFilter} />

      {filteredIssues.map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default Dashboard;