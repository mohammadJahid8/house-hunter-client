import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

import Home from "@/pages/Home";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import OwnerDashboard from "../pages/OwnerDashboard/OwnerDashboard";
import OwnerHouses from "../pages/OwnerDashboard/OwnerHouses";
import Bookings from "../pages/OwnerDashboard/Bookings";
import RenterDashboard from "../pages/RenterDashboard/RenterDashboard";
import RenterBookings from "../pages/RenterDashboard/RenterBookings";

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
    path: "/owner-dashboard",
    element: <OwnerDashboard />,
    children: [
      {
        path: "/owner-dashboard",
        element: <OwnerHouses />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
  {
    path: "/renter-dashboard",
    element: <RenterDashboard />,
    children: [
      {
        path: "/renter-dashboard",
        element: <RenterBookings />,
      },
    ],
  },
]);

export default routes;
