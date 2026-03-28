import React, { useState } from "react";

export default function Settings() {
  const [username, setUsername] = useState("User");
  const [theme, setTheme] = useState("Light");

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div>
      <h2>Settings</h2>

      <label>Username:</label>
      <br />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <label>Theme:</label>
      <br />
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option>Light</option>
        <option>Dark</option>
      </select>

      <br /><br />

      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}