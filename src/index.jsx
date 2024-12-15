import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import "./index.css";
import App from "./App";

// Create the root for the app using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
