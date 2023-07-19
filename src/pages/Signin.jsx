/* eslint-disable no-unused-vars */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignin = async (event) => {
    window.scrollTo(0, 0);
    event.preventDefault();

    setError("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    await axios
      .post("http://localhost:5000/api/v1/auth/login", data)
      .then((res) => {
        console.log(res.data.data.accessToken);

        if (res.data.success === true) {
          toast.success("Signin successful!");
          localStorage.setItem("houseToken", res.data.data.accessToken);
          setIsLoading(false);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error("Something went wrong! Please try again.");
      });
  };

  return (
    <div className="flex justify-center items-center  min-h-screen">
      <Card shadow={false} className="p-6 shadow-lg ">
        <Typography variant="h4" color="blue-gray">
          Sign in
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to signin.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSignin}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" required name="email" />

            <Input
              type="password"
              size="lg"
              label="Password"
              required
              name="password"
            />
          </div>
          {error && (
            <p color="red" className="font-sans text-xs text-red-800">
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
          <Typography color="gray" className="mt-4 text-center font-normal">
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
