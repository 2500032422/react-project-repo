import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateIssue from "./pages/CreateIssue";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";


function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/login" replace />;
}

function Layout({ isAuth, setIsAuth, issues, setIssues }) {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && isAuth && <NavBar setIsAuth={setIsAuth} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Dashboard issues={issues} setIssues={setIssues} />
            </ProtectedRoute>
          }
        />
<Route
  path="/create"
  element={
    <ProtectedRoute isAuth={isAuth}>
      <CreateIssue setIssues={setIssues} />
    </ProtectedRoute>
  }
/>

        <Route
          path="/analytics"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Reports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}


export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  const [issues, setIssues] = useState([
    { id: 1, title: "Login Bug", status: "Open" },
  ]);

  return (
    <Router>
      <Layout
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        issues={issues}
        setIssues={setIssues}
      />
    </Router>
  );
}