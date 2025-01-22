import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Music",
  "Triller",
  "History",
  "Comedy",
  "Songs",
  "Cooking",
  "Cricket",
  "WWF",
  "News",
];
const ButtonsList = () => {
  return (
    <div className="flex">
      {list.map((data, idx) => (
        <Button key={idx} data={data} />
      ))}
    </div>
  );
};

export default ButtonsList;
