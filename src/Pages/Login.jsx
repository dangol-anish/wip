import React from "react";
import { RxAvatar } from "react-icons/rx";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-black to-[#2D3436] ">
      <div className=" pt-12 pb-5 px-16 rounded-xl flex flex-col  bg-black/30">
        <h1 className="text-white text-3xl font-bold">Welcome Back</h1>
        <p className="text-gray-300 text-md pb-10">Login to your account</p>
        <div className="flex flex-col items-center gap-6">
          <form className="flex flex-col gap-4  items-center ">
            <input
              className="bg-zinc-800  p-4 rounded-xl text-white focus:outline-none "
              type="email"
              placeholder="E-Mail"
            />
            <input
              className="bg-zinc-800 p-4 rounded-xl text-white focus:outline-none "
              type="password"
              placeholder="Password"
            />

            <button class="mt-5 ease-in-out duration-1000 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign In
              </span>
            </button>
          </form>
          <p className="text-zinc-500 ">Don't have an account? Sign Up </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
