import React from "react";

import Top7 from "../components/main/home/Top7";
import HomeVideos from "../components/main/home/HomeVideos";

export default function Home() {
  return (
    <div className=" relative w-full h-full px-4 ">
      <Top7 />

      {roundList.map((round, index) => (
        <HomeVideos round={round} key={index} />
      ))}

      {/* 마진 병합 해제용 */}
      <div className="p-1"></div>
    </div>
  );
}

const roundList = [`본선1차전`, `본선2차전`, `본선3차전`, `준결승전`, `결승전`];
