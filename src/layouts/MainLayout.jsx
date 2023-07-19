import { Outlet } from "react-router-dom";
import NavbarHead from "./NavbarHeader";
import Footer from "./Footer";

export default function MainLayout() {
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
