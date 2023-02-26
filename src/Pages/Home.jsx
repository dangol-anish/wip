import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#013220] to-[#29383d] h-screen flex justify-center items-center">
      <div className="text-white rounded-xl border border-black h-[90%] w-[80%]  overflow-hidden flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
