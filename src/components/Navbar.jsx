import React from "react";

import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  bg-zinc-900 h-12 px-4 ">
      <div className="flex gap-2 items-center">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          className="h-6 w-6 object-cover rounded-full"
          alt="Avatar"
        />
        <span>Anish</span>
      </div>
      <div>
        <button id="btn" className="hidden">
          Logout
        </button>
        <label
          className="cursor-pointer hover:text-zinc-500 hidden md:block"
          htmlFor="btn"
        >
          <AiOutlineLogout size={20} />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
