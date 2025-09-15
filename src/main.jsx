import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouterRouter } from "react-router-dom";

import "./index.css";
import App from "./components/App/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouterRouter basename="/Made_by_Mothers-frontend">
      <App />
    </HashRouterRouter>
  </StrictMode>
);
