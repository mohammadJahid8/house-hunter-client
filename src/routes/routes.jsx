import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

import Home from "@/pages/Home";
import NotFound from "../pages/NotFound";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import OwnerDashboard from "../pages/OwnerDashboard/OwnerDashboard";
import OwnerHouses from "../pages/OwnerDashboard/OwnerHouses";

import RenterDashboard from "../pages/RenterDashboard/RenterDashboard";
import RenterBookings from "../pages/RenterDashboard/RenterBookings";
import BookHouse from "../pages/BookHouse";
import Addhouse from "../pages/OwnerDashboard/Addhouse";
import EditHouse from "../pages/OwnerDashboard/EditHouse";
import PrivateRoutes from "./PrivateRoute";
import HousesBooked from "../pages/OwnerDashboard/HousesBooked";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `/book-house/:id`,
        element: (
          <PrivateRoutes>
            <BookHouse />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/owner-dashboard",
    element: (
      <PrivateRoutes>
        <OwnerDashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/owner-dashboard",
        element: <OwnerHouses />,
      },
      {
        path: "houses-booked",
        element: <HousesBooked />,
      },
      {
        path: "addhouse",
        element: <Addhouse />,
      },
      {
        path: "edit-house/:id",
        element: <EditHouse />,
      },
    ],
  },
  {
    path: "/renter-dashboard",
    element: (
      <PrivateRoutes>
        <RenterDashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/renter-dashboard",
        element: <RenterBookings />,
      },
    ],
  },
]);

export default routes;
