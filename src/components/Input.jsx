import React from "react";
import { ImAttachment } from "react-icons/im";
import { BiImageAdd } from "react-icons/bi";

const Input = () => {
  return (
    <div className="bg-zinc-900 h-12 flex items-center justify-between pt-2 px-2">
      <input
        className="w-[70%] bg-zinc-800 rounded-lg px-2 py-2 focus:outline-none"
        type="text"
        placeholder="Type a message..."
      />
      <div className="flex items-center gap-3 pl-2 cursor-pointer">
        <ImAttachment size={20} />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <BiImageAdd size={20} />
        </label>
        <button
          className="border p-1 
        ease-in-out duration-300
         text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800
        "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
