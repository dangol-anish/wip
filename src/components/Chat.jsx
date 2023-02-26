import React from "react";
import { AiFillCamera, aiout, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const Chat = () => {
  return (
    <div className="w-[65%] bg-zinc-900/90 h-12">
      <div className="flex justify-between p-3 items-center">
        <span>Tyler</span>
        <div className="flex gap-2">
          <AiFillCamera size={20} />
          <AiOutlineUsergroupAdd size={20} />
          <FiMoreHorizontal size={20} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
