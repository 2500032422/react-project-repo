import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar">
      <h2 style={{ color: "white" }}>Issue Tracker</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/create">Create Issue</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/about">About</Link>
       
      </div>
    </div>
  );
};

export default NavBar;