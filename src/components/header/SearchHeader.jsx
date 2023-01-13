import React, { useEffect, useState } from "react";

import { BsSearch, BsYoutube, BsList } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <div className=" flex items-center py-8 ">
      <BsList className="text-3xl cursor-pointer " />
      <Link className="flex items-center cursor-pointer ml-4 z-10" to="/">
        {/* <BsYoutube className="text-youtube-red text-3xl mr-1 mt-1" /> */}
        <div className="flex text-2xl text-white font-bold bg-gradient-basic rounded-xl p-1">
          <div className="">Tro</div>
          <div className="">tube</div>
        </div>
      </Link>
      <form className=" flex justify-center w-full " onSubmit={handleSubmit}>
        <input
          className="w-full w-1/2 lg:w-2/5 min-w-30 px-6 border outline-none rounded-l-full"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className="border border-l-0 p-3 px-5 rounded-r-full bg-gray-100 hover:bg-gray-200">
          <BsSearch className="text-lg" />
        </button>
      </form>
      {/* <Setting /> */}
    </div>
  );
}
