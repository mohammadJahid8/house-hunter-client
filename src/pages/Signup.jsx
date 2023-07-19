/* eslint-disable no-unused-vars */

import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (event) => {
    window.scrollTo(0, 0);
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    console.log(role);

    data.role = role;

    console.log(data);

    const phoneNumberRegex = /^(\+?88)?01[3-9]\d{8}$/;

    if (!phoneNumberRegex.test(data.phoneNumber)) {
      setError("Please enter a Bangladeshi phone number!");
      setIsLoading(false);
      return;
    }

    if (!role || role === "" || !data.role) {
      setError("Please select a role!");
      setIsLoading(false);
      return;
    }

    await axios
      .post("http://localhost:5000/api/v1/auth/signup", data)
      .then((res) => {
        console.log(res);

        if (res.data.success === true) {
          toast.success("Registration successful!");
          setIsLoading(false);
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error("Something went wrong! Please try again.");
      });
  };
  const handleSelectChange = (event) => {
    setRole(event);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
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
            <Input size="lg" label="Full Name" required name="name" />

            <Select
              label="Role"
              aria-required
              name="role"
              onChange={handleSelectChange}
              value={role}
            >
              <Option value="owner">House Owner</Option>
              <Option value="renter">House Renter</Option>
            </Select>

            <Input
              size="lg"
              label="Phone number"
              required
              name="phoneNumber"
              type="number"
            />

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
            <p color="red" className="font-sans text-sm text-red-700">
              {error}
            </p>
          )}

          <Button
            className="mt-6"
            fullWidth
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Registering..." : "Register"}
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
      <Toaster />
    </div>
  );
}
