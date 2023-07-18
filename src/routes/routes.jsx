import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

import Home from "@/pages/Home";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // {
      //   path: "/dashboard",
      //   element : <Settings/>
      // }
    ],
  },
]);

export default routes;
