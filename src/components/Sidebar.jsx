import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="bg-black/70 w-[35%]">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
