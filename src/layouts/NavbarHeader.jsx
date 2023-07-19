import React, { useContext } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import houselogo from "../assets/houseLogo.png";
import { UserAuthContext } from "../context/userContext";
// import "./Navbar.css";

export default function NavbarHead() {
  const [openNav, setOpenNav] = React.useState(false);

  const { user, logout } = useContext(UserAuthContext);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-white font-bold"
        >
          Home
        </Typography>
      </Link>
      {user?.email && (
        <Link
          to={user?.role === "owner" ? "owner-dashboard" : "renter-dashboard"}
        >
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 text-white font-bold"
          >
            Dashboard
          </Typography>
        </Link>
      )}
    </ul>
  );

  return (
    <>
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 navbar-bg bg-transparent border-none">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5  flex text-white font-bold gap-2">
              <img src={houselogo} alt="bookshelf" className="h-6 w-6 " />
              House Hunter
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            {user?.email ? (
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={() => logout()}
              >
                <span>SIGN OUT</span>
              </Button>
            ) : (
              <Link to="/signin">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>SIGN IN</span>
                </Button>
              </Link>
            )}

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-gray-200"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}

          {user?.email ? (
            <Button
              variant="gradient"
              size="sm"
              fullWidth
              className="mb-2"
              onClick={() => logout()}
            >
              <span>SIGN OUT</span>
            </Button>
          ) : (
            <Link to="/signin">
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <span>SIGN IN</span>
              </Button>
            </Link>
          )}
        </Collapse>
      </Navbar>
    </>
  );
}
