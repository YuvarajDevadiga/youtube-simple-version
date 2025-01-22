import React, { useEffect, useState } from "react";
import youtubelogo from "../youtubelogo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className=" text-white shadow-lg shadow-[#1b1b1b] grid grid-flow-col p-4  ">
      <div className=" flex items-center col-span-1 ">
        <i
          onClick={toggleMenuHandler}
          className="ri-menu-2-line text-2xl mr-4 cursor-pointer"
        ></i>
        <img className="h-8" src={youtubelogo} alt="youtube-logo" />
      </div>
      <div className="col-span-10 text-center relative">
        <input
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[#121212] rounded-l-3xl w-1/2 px-4 border border-gray-400 p-2"
          type="text"
          placeholder="Search"
          name=""
          id=""
          value={searchQuery}
        />
        <button className=" border px-6 bg-[#222222] rounded-r-3xl border-gray-400 p-2">
          <i className="ri-search-line"></i>
        </button>

        {showSuggestions && (
          <div className="absolute text-left  left-[23%] rounded-lg bg-[#222222] mt-2 h-fit w-[50%]">
            <ul className="">
              {suggestions.map((suggestion, idx) => (
                <li key={idx} className="hover:bg-[#4b4b4b] px-5 py-2">
                  <i className="ri-search-line"></i> {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 text-end ">
        <i className="ri-account-circle-fill text-4xl"></i>
      </div>
    </div>
  );
};

export default Head;
