import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

<<<<<<< HEAD
=======
// react-toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

>>>>>>> 42aa146 (`auth modified`)
import App from "./App";
import ThemeMode from "./UI/ThemeMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <ThemeMode>
      <App />
    </ThemeMode>
  </React.StrictMode>
=======
  <ThemeMode>
    <App />
    <ToastContainer />
  </ThemeMode>
>>>>>>> 42aa146 (`auth modified`)
);
