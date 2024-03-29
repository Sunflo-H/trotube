import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getMember } from "../../../../queryFn/trotQueries";

export default function Round_underMd({ round }) {
  const roundStr_noSpace = round.replace(" ", "");

  const navigate = useNavigate();
  const { data: videos } = useQuery({
    queryKey: ["roundVideos", roundStr_noSpace],
    queryFn: getMember,
  });

  const handleClick = () => {
    navigate(`/videos/round/${round}`, { state: videos });
    window.scrollTo(0, 0);
  };

  return (
    <li
      // * 리스트형일때
      className="flex w-full rounded-xl relative
      text-2xl cursor-pointer overflow-hidden "
      onClick={handleClick}
    >
      <img
        className="w-full h-20 m-auto opacity-90 "
        src={`/img/${roundStr_noSpace}.jpg`}
      />
      <div
        className={`absolute flex items-center pl-4 w-full h-full text-white ${roundStr_noSpace}`}
      >
        <span className="">{round}</span>
      </div>
    </li>
  );
}
