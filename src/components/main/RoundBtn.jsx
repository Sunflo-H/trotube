import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoundBtn({ round }) {
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
      className="flex flex-col items-center justify-center basis-1/4 h-20 rounded-xl shadow-test"
      onClick={handleClick}
    >
      {str1 ? (
        <>
          <p>{str1}</p>
          <p>{str2}</p>
        </>
      ) : (
        <p>{round}</p>
      )}
    </li>
  );
}

const queryFn = async ({ queryKey }) => {
  const url = `/data/mrtrot1/${queryKey[1]}.json`;
  const { data } = await axios.get(url);
  const result = data.map((data) => data.items[0]);
  return result;
};
