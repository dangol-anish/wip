import React from "react";

const Register = () => {
  return (
    <div className="w-full h-screen font-mono">
      <img
        className=" w-full h-full absolute object-cover blur-[0.5px]"
        src="https://images.unsplash.com/photo-1467396555244-ddb071a5841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1883&q=80"
        alt="bg-img"
      />
      <div className="bg-black/40 fixed top-0 left-0 h-screen w-full"></div>
      <div className="relative h-screen w-full flex justify-center items-center">
        <div className="w-[550px] h-[550px] bg-zinc-300/50 rounded-3xl flex flex-col justify-center items-center">
          <div className="flex flex-col p-5">
            <h1 className="text-4xl pb-1">Let's Get Started</h1>
            <p className="text-md text-gray-700 ">Create Your Account</p>
          </div>
          <div className="h-[400px] w-[500px] py-[5rem]">
            <form className="flex flex-col items-center justify-center gap-4">
              <input
                className="pl-2 rounded-lg p-1"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="pl-2 rounded-lg  p-1"
                type="email"
                placeholder="E-mail"
              />
              <input
                className="pl-2 rounded-lg  p-1"
                type="password"
                placeholder="password"
              />
              <input
                className=" text-[0.8em] "
                type="file"
                placeholder="Add an avatar"
              />
            </form>
          </div>
          <p className="">Already Have An Account? Login </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
