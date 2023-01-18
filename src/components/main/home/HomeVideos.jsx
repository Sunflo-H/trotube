import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import VideoCard from "../VideoCard";
import Videos from "../Videos";

export default function HomeVideos({ round }) {
  const navigate = useNavigate();
  const { data: videos } = useQuery({
    queryKey: ["videos", round],
    queryFn,
  });

  const handleClick = () => {
    navigate(`/videos/round/${round}`, { state: videos });
  };

  return (
    <div className="my-10 ">
      <div className="flex items-end px-4 cursor-pointer" onClick={handleClick}>
        <div className="text-2xl font-semibold ">{round}</div>
        <div className="opacity-90 ml-auto">더보기</div>
      </div>
      <Videos round={round} count={4} />
    </div>
  );
}

const queryFn = async ({ queryKey }) => {
  const url = `/data/mrtrot1/${queryKey[1]}.json`;
  const { data } = await axios.get(url);
  const result = data.map((data) => data.items[0]);
  return result;
};
