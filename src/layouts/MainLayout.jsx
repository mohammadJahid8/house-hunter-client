import { Outlet } from "react-router-dom";
import NavbarHead from "./NavbarHeader";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className="max-w-[90rem] mx-auto">
      <NavbarHead />
      <div className=" h-screen">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
