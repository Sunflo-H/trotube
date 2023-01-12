import React, { useEffect, useState } from "react";

import { BsSearch, BsYoutube } from "react-icons/bs";
import Setting from "./Setting";
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
    <div className="flex  items-center p-4 ">
      <Link className="flex items-center cursor-pointer" to="/">
        <BsYoutube className="text-youtube-red text-3xl mr-1 mt-1" />
        <div className="text-2xl font-bold">Youtube</div>
      </Link>
      <form
        className="flex justify-center w-full p-2  "
        onSubmit={handleSubmit}
      >
        <input
          className="w-full w-8/12 px-6 border outline-none rounded-l-full"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className="border border-l-0 p-4 px-6 rounded-r-full bg-gray-100 hover:bg-gray-200">
          <BsSearch className="text-lg" />
        </button>
      </form>
      <Setting />
    </div>
  );
}
