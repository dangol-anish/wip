import React from "react";

const Message = () => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-1">
        <img
          className="h-10 w-10 object-cover rounded-full "
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="face"
        />
        <span className="text-zinc-500 text-sm">Just Now</span>
      </div>
      <div className="w-[50%] bg-zinc-700 h-10 flex items-center p-2 rounded-lg rounded-tl-none">
        <p>Hello</p>
        {/* <img
          className="h-10 w-10 object-cover rounded-full "
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Message;
