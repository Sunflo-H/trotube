import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import RoundVideos_sample from "./RoundVideos_sample";

export default function Round({ round }) {
  const navigate = useNavigate();
  const roundStr_noSpace = round.replace(" ", "");

  const { data: videos } = useQuery({
    queryKey: ["roundVideos", roundStr_noSpace],
    queryFn,
  });

  const handleClick = () => {
    navigate(`/videos/round/${round}`, { state: videos });
    window.scrollTo(0, 0);
  };

  return (
    <div className="my-10 ">
      <div className="flex items-end px-4 cursor-pointer" onClick={handleClick}>
        <div className="text-2xl font-semibold">{round}</div>
        <div className="hidden lg:block opacity-90 ml-auto">더보기</div>
      </div>
      <RoundVideos_sample round={roundStr_noSpace} maxVideosOnHomePage={5} />
    </div>
  );
}

const queryFn = async ({ queryKey }) => {
  let round = queryKey[1];
  const url = `/data/mrtrot1/${round}.json`;
  const { data } = await axios.get(url);
  const result = data.map((data) => data.items[0]);
  return result;
};
