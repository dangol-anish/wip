import React from "react";
import { AiFillCamera, aiout, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages";
import Input from "./Input";
import { GiHamburgerMenu } from "react-icons/gi";

const Chat = () => {
  return (
    <div className="w-full bg-zinc-900">
      <div className="flex justify-between p-3 items-center">
        <div className="flex gap-5">
          <button>
            <GiHamburgerMenu size={20} />
          </button>

          <span>Tyler</span>
        </div>

        <div className="flex gap-2">
          <AiFillCamera size={20} />
          <AiOutlineUsergroupAdd size={20} />
          <FiMoreHorizontal size={20} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
