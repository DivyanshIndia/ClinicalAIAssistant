"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSignIn = () => router.push("/signIn");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 xl:w-2/5 p-8 bg-black/20 shadow-xl rounded-lg">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block mb-2 text-sm font-medium  text-white/70"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block mb-2 text-sm font-medium  text-white/70"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium  text-white/70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium  text-white/70"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
              type="password"
              id="password"
              placeholder="Create a password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium  text-white/70"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-lg text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
        <button
          type="submit"
          onClick={handleSignIn}
          className="w-full px-4 py-2 my-3 text-lg text-white hover:border-2 rounded-md hover:bg-black/10 focus:outline-none  focus:bg-black/30"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
