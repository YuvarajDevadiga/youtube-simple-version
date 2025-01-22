import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // if (!isMenuOpen) return null;
  return (
    <div className="w-56  ">
      <div
        className={`p-6  shadow-lg ${isMenuOpen ? "w-56" : "w-0"} ${
          isMenuOpen ? "opacity-1" : "opacity-0 "
        } transition-all  flex flex-col  `}
      >
        <ul>
          <li className="text-xl">
            <Link to={"/"}>
              <i className="ri-home-4-fill"></i>Home
            </Link>
          </li>
          <li className="">Shorts</li>
          <li className="">Videos</li>
          <li className="">Live</li>
        </ul>
        <h1 className="font-bold pt-5">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h1 className="font-bold pt-4">Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
