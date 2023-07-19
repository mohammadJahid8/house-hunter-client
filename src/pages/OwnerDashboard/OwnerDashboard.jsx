import { Link, Outlet, useNavigate } from "react-router-dom";
import houselogo from "../../assets/houseLogo.png";
import { BsFillHouseCheckFill, BsFillHouseDoorFill } from "react-icons/bs";
import { useContext, useEffect } from "react";
import { UserAuthContext } from "../../context/userContext";
import { HashLoader } from "react-spinners";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0 auto",
};

const OwnerDashboard = () => {
  const { user, isLoadingUser } = useContext(UserAuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "owner") {
      navigate("/");
    }
  }, [user?.role, navigate]);

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

  return (
    <div>
      <div>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-[#262626] text-white">
            <Link to="/">
              <div className="mb-4 dashboardhead flex items-center gap-2">
                <img src={houselogo} className="w-6 h-6 inline" />
                <h1 className="text-[19px] ">House Hunter</h1>
              </div>
            </Link>
            <h1
              className="mb-4"
              style={{
                fontWeight: "bold",
              }}
            >
              Owner Dashboard
            </h1>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/owner-dashboard"
                  className="flex text-lg items-center p-2 text-gray-200 hover:text-black hover:bg-gray-100 rounded-lg dark:text-white bg-gray-800 dark:hover:bg-gray-700 group"
                >
                  <BsFillHouseDoorFill className="text-2xl" />
                  <span className="ml-3">My Houses</span>
                </Link>
              </li>
              <li>
                <Link
                  to="houses-booked"
                  className="flex text-lg items-center p-2 text-gray-200 hover:text-black hover:bg-gray-100 rounded-lg dark:text-white bg-gray-800 dark:hover:bg-gray-700 group"
                >
                  <BsFillHouseCheckFill className="text-2xl" />
                  <span className="ml-3">Houses Booked</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
