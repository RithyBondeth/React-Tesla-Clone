import React from "react";
import ReactDOM from "react-dom/client";

import TeslaApp from "./app";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Could not find the root element.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <TeslaApp />
  </React.StrictMode>,
);
