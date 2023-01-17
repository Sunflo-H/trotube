import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import MainVideos from "../MainVideos";
import Videos from "../Videos";

export default function VideosByRound({ round }) {
  return (
    <div className="my-10 ">
      <div className="flex items-end mx-4">
        <div className="text-2xl font-semibold ">{round}</div>
        <div className="opacity-90 ml-auto">더보기</div>
      </div>
      <Videos round={round} />
    </div>
  );
}
