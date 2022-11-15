import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import App from "./App";
import ThemeMode from "./UI/ThemeMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeMode>
      <App />
      <ToastContainer />
    </ThemeMode>
);
