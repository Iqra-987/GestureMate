import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ import JS bundle if needed

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
