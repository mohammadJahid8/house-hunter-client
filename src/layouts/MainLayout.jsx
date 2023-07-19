import { Outlet } from "react-router-dom";
import NavbarHead from "./NavbarHeader";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0 auto",
};

export default function MainLayout() {
  // when the user enters the page show a loading screen until the page is fully loaded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading)
    return (
      <HashLoader
        color={"#2c98d0"}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  return (
    <div className=" mt-28 md:mt-16 ">
      <NavbarHead />
      <div className=" min-h-screen max-w-[90rem] mx-auto md:px-16 px-8">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
