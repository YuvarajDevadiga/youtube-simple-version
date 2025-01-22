import React from "react";
import { generateRandomColor } from "../utils/helper";
const ChatMessage = ({ name, message }) => {
 
  return (
    <div className="flex gap-2 items-center mb-2">
      <div
        className={`w-8 flex justify-center items-center h-8 bg-[#333] rounded-full`}
      >
        {name.slice(0, 1)}
      </div>
      <div>
        <p className="text-[#B7B7B7] text-sm">{name}</p>
        <p className="text-sm text-gray-200">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
