import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IssueProvider } from "./context/IssueContext";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import CreateIssue from "./pages/CreateIssue";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import About from "./pages/About";

import "./App.css";


function App() {
  return (
    <IssueProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateIssue />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Router>
    </IssueProvider>
  );
}

export default App;