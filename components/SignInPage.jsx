"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCreateAccount = () => router.push("/signUp");

  return (
    <div className="flex">
      {/* Image section - uncomment if you want to use it */}
      {/* <div className="hidden lg:flex w-full lg:w-1/2 login-image-section">
        <Image
          src="https://img.icons8.com/flat-round/64/back--v1.png"
          alt="Sign In"
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      <div className="flex flex-col w-full h-screen  bg-white md:bg-inherit justify-center items-center p-6">
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-black/20 shadow-md overflow-hidden sm:rounded-lg">
          <h2 className="mb-6 text-3xl font-bold text-center text-white">
            Sign In
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-white/70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-white/70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mb-6">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </form>
          <button
            type="submit"
            onClick={handleCreateAccount}
            className=" text-white w-full px-4 py-2 tracking-wide my-2 transition-colors duration-200 transform  rounded-md hover:border-2 focus:outline-none focus:bg-black/10"
          >
            Create new Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
