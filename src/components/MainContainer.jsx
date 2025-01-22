import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="px-4 ml-10 overflow-hidden ">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
