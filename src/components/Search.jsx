import React from "react";

const Search = () => {
  return (
    <div className="pt-2 w-full flex flex-col justify-center items-center">
      <input
        type="text"
        className=" bg-zinc-800 w-[90%] rounded-lg px-2 py-2 focus:outline-none "
        placeholder="Search user..."
      />
      <div className="flex justify-center md:justify-start md:gap-2  px-4 py-3 w-full  border-b border-zinc-800 ">
        <img
          className="h-7 w-7 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          alt=""
        />
        <div>
          <span className="hidden md:block">Anish</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
