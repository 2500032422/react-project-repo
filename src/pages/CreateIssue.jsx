import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateIssue({ setIssues }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter issue");
      return;
    }

    const newIssue = {
      id: Date.now(),
      title: title.trim(),
      status: "Open",
    };

    // 🔥 Add issue to global state
    setIssues((prev) => [...prev, newIssue]);

    // clear input
    setTitle("");

    // go to dashboard
    navigate("/");
  };

  return (
    <div>
      <h2>Create Issue</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter issue title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Issue</button>
      </form>
    </div>
  );
}