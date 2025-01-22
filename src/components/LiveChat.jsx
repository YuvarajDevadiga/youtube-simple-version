import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveText, setLiveText] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const handleSubmit = () => {
    dispatch(
      addMessage({
        name: "Yuvaraj",
        message: liveText,
      })
    );
    setLiveText("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      //API Polling
      //   console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(5),
        })
      );
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="p-2 flex livechat  flex-col-reverse overflow-hidden overflow-y-scroll h-[500px]">
        {chatMessages.map((message, idx) => (
          <ChatMessage
            key={idx}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-2 px-4 flex"
          action=""
        >
          <input
            onChange={(e) => setLiveText(e.target.value)}
            className="w-full p-2 pl-4 border border-slate-500 rounded-full bg-[#272727]"
            type="text"
            name=""
            id=""
            placeholder="chat..."
            value={liveText}
          />
          <button
            onClick={handleSubmit}
            className="bg-[#464646] text-sm ml-2 p-2 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
