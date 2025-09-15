import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./components/App/App.jsx";

const isProd = import.meta.env.MODE === "production";
const basename = isProd ? "/Made_by_Mothers-frontend" : undefined;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </StrictMode>
);
