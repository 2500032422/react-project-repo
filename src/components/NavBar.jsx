import { Link } from "react-router-dom";

export default function NavBar({ setIsAuth }) {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
      <Link to="/">Dashboard</Link>
      <Link to="/create">Create Issue</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>

      <button onClick={() => setIsAuth(false)}>Logout</button>
    </nav>
  );
}