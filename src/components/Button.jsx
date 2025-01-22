import React from "react";

const Button = ({ data }) => {
  return (
    <div>
      <button className="px-4 py-2 rounded-lg m-2 bg-[#3F3F3F] ">{data}</button>
    </div>
  );
};

export default Button;
