import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EtcBtn({ title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/${title}`);
  };

  return (
    <li
      className="flex flex-col items-center justify-center basis-1/4 h-32 rounded-xl shadow-test
      cursor-pointer bg-yellow-400 text-indigo-700 text-5xl text-center "
      onClick={handleClick}
    >
      {title}
    </li>
  );
}
