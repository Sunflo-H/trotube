import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Round_underMd({ round }) {
  let str = round;
  let str1, str2;
  if (str !== "준결승전" && str !== "결승전") {
    str = str.split(" ");
    str1 = str[0];
    str2 = str[1];
    round = str1 + str2;
  }

  const navigate = useNavigate();
  const { data: videos } = useQuery({
    queryKey: ["videos", round],
    queryFn,
  });

  const handleClick = () => {
    navigate(`/videos/round/${round}`, { state: videos });
  };

  return (
    <li
      // * 버튼형일때
      // className="flex flex-col items-center justify-center h-24 w-28 rounded-xl shadow-test
      // text-2xl cursor-pointer"

      // * 리스트형일때
      className="flex w-full rounded-xl relative
      text-2xl cursor-pointer overflow-hidden "
      onClick={handleClick}
    >
      {/* {str1 ? (
        <>
          <p>{str1}</p>
          <p>{str2}</p>
        </>
      ) : (
        <p>{round}</p>
      )} */}
      <img
        className="w-full h-20 m-auto opacity-90 "
        src={`/img/${round}.jpg`}
      />
      <div
        className={`absolute flex items-center pl-4 w-full h-full text-white  ${round}`}
      >
        <span className="">{round}</span>
      </div>
    </li>
  );
}

const queryFn = async ({ queryKey }) => {
  const url = `/data/mrtrot1/${queryKey[1]}.json`;
  const { data } = await axios.get(url);
  const result = data.map((data) => data.items[0]);
  return result;
};
