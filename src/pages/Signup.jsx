/* eslint-disable no-unused-vars */

import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Signup() {
  const [error, setError] = useState("");

  const handleSignup = async (event) => {
    window.scrollTo(0, 0);
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const data = Object.fromEntries(formData);

    // if (response?.success === true) {
    //   navigate("/signin");
    // }
  };

  return (
    <div className="flex justify-center items-center mt-16">
      <Card shadow={false} className="p-6 shadow-lg">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSignup}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" required name="name" />
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
            className="mt-6"
            fullWidth
            type="submit"
            // disabled={isLoading ? true : false}
          >
            {/* {isLoading ? "Registering..." : "Register"} */}
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
