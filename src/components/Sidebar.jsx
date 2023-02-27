import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="bg-black/70 w-[20%] border-r-[1px] border-zinc-700">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
