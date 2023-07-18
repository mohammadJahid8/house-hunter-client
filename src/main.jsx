import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import routes from "./routes/routes";
import { ThemeProvider } from "@material-tailwind/react";
import UserAuthProvider from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthProvider>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </UserAuthProvider>
  </React.StrictMode>
);
