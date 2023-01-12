import React, { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill, BsFillMoonFill, BsSearch, BsYoutube } from "react-icons/bs";
import Setting from "./Setting";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex  items-center  p-4">
      <div className="flex items-center cursor-pointer">
        <BsYoutube className="text-youtube-red text-3xl mr-1 mt-1" />
        <div className="text-2xl">Youtube</div>
      </div>
      <form
        className="flex justify-center w-full p-2  "
        onSubmit={() => navigate(`/videos/${keyword}`)}
      >
        <input
          className="w-full w-8/12 px-4 border outline-none rounded-l-full"
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <button className="border border-l-0 p-4 px-6 rounded-r-full">
          <BsSearch className="text-lg" />
        </button>
      </form>
      <Setting />
    </div>
  );
}
