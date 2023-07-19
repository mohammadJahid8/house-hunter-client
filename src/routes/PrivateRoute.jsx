/* eslint-disable react/prop-types */

import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { UserAuthContext } from "../context/userContext";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0 auto",
};

export default function PrivateRoutes({ children }) {
  const { user, isLoadingUser } = useContext(UserAuthContext);
  const { pathname } = useLocation();

  const token = localStorage.getItem("houseToken");

  if (isLoadingUser)
    return (
      <HashLoader
        color={"#2c98d0"}
        loading={isLoadingUser}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  if (!user?.email && !isLoadingUser && !token) {
    return <Navigate to="/signin" state={{ path: pathname }} />;
  }

  return children;
}
