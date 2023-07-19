/* eslint-disable no-unused-vars */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/userContext";
import swal from "sweetalert";

export default function Signin() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { userRefetch, setUserRefetch } = useContext(UserAuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSignin = async (event) => {
    window.scrollTo(0, 0);
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    await axios
      .post(
        "https://house-hunter-server-bay.vercel.app/api/v1/auth/login",
        data
      )
      .then((res) => {
        if (res.data.success === true) {
          swal({
            text: `Signin Successful!`,
            icon: "success",
          });
          localStorage.setItem("houseToken", res.data.data.accessToken);
          setIsLoading(false);
          setUserRefetch(!userRefetch);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err?.response?.data?.message);
        toast.error("Something went wrong! Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center  mt-40">
      <Card shadow={false} className="p-6 shadow-lg house-card-body text-white">
        <Typography variant="h4" color="white">
          Sign in
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-gray-300">
          Enter your details to signin.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSignin}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Email"
              required
              name="email"
              className="text-white"
            />

            <Input
              type="password"
              size="lg"
              label="Password"
              required
              name="password"
              className="text-white"
            />
          </div>
          {error && (
            <p color="red" className="font-sans text-sm text-red-700">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="mt-6"
            fullWidth
            // disabled={isLoading ? true : false}
          >
            {isLoading ? "SIGN IN..." : "SIGN IN"}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal text-gray-300"
          >
            Dont have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>

      <Toaster />
    </div>
  );
}
