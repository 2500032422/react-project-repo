import { createContext, useState, useEffect } from "react";

export const IssueContext = createContext();

export const IssueProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      try {
        setIssues([
          { id: 1, title: "Login Bug", status: "Open", priority: "High" },
          { id: 2, title: "UI Issue", status: "In Progress", priority: "Medium" }
        ]);
        setLoading(false);
      } catch {
        setError("Failed to load issues");
        setLoading(false);
      }
    }, 1000);
  }, []);

  const addIssue = (issue) => {
    setIssues([...issues, { ...issue, id: Date.now() }]);
  };

  const updateStatus = (id, newStatus) => {
    setIssues(
      issues.map((issue) =>
        issue.id === id ? { ...issue, status: newStatus } : issue
      )
    );
  };

  return (
    <IssueContext.Provider
      value={{ issues, addIssue, updateStatus, loading, error }}
    >
      {children}
    </IssueContext.Provider>
  );
};