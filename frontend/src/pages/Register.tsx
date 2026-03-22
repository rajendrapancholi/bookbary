"use client";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth"; // Ensure your useAuth hook handles a 'register' type/mutation
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Register: React.FC = () => {
  const navigate = useNavigate();
  // Assuming your useAuth hook provides a registration mutation
  const {
    register: mutate,
    isRegistering: isLoading,
    registerError: error,
  } = useAuth();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    // Assuming your hook is set up to handle registration data
    mutate(formData, {
      onSuccess: () => {
        toast.success("Account created successfully! Please log in. 🎉");
        navigate("/login");
      },
      onError: (error) => {
        toast.error((error as Error).message || "Registration failed");
      },
    });
  };

  return (
    <div className="flex mx-auto h-screen w-full">
      {/* Left Side: Branding */}
      <div className="flex flex-1/2 justify-center items-center text-white bg-neutral-600 dark:bg-neutral-800 rounded-r-4xl">
        <div className="flex flex-col gap-16 justify-center items-center h-full">
          <div className="text-sm flex flex-col justify-center items-center">
            <img src="/logo.png" alt="BookBary" className="size-20 mb-3" />
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient">
              BookBary
            </h1>
            <p className="text-xl font-mono font-bold -mt-1 bg-clip-text text-transparent bg-gradient">
              Library
            </p>
          </div>
          <div className="flex justify-center gap-4 items-center flex-col">
            <p className="text-md mt-2 dark:text-gray-300">
              Already have an account?
            </p>
            <NavLink
              to="/login"
              className="text-center ring-1 ring-neutral-300 hover:ring-0 px-8 bg-gradient-btn text-white p-2 rounded-lg cursor-pointer text-lg font-bold hover-scale-left-top-bottom"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex flex-1/2 flex-col justify-center items-center h-full">
        <div className="text-sm flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl dark:text-gray-100 font-bold">
            Create Account
          </h1>
          <p className="text-sm dark:text-gray-300">
            Join BookBary to manage your library
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 rounded-lg w-full max-w-md"
        >
          {error && (
            <p className="text-red-500 mb-4 text-center">
              {(error as Error).message}
            </p>
          )}

          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="w-1/2 p-3 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl"
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="w-1/2 p-3 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-btn text-white p-3 rounded-lg cursor-pointer text-lg font-bold shadow-lg"
          >
            {isLoading ? "Creating Account..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
