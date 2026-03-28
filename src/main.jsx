import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { IssueProvider } from "./context/IssueContext"; // ✅ ADD THIS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IssueProvider>   {/* ✅ WRAP APP */}
      <App />
    </IssueProvider>
  </StrictMode>
);
