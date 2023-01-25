import React from "react";
import Category from "../components/main/category/Category";
import Top7 from "../components/main/home/Top7";
import HomeVideos from "../components/main/home/HomeVideos";
import RoundBtn from "../components/main/RoundBtn";

export default function Home() {
  return (
    <div className=" relative w-full h-full px-4 ">
      {/* <Category /> */}
      <Top7 />

      <div className="hidden lg:block">
        {roundList.map((round, index) => (
          <HomeVideos round={round} key={index} />
        ))}
      </div>

      <div className="lg:hidden my-10">
        <p className="text-2xl font-bold">라운드별 모아보기</p>
        <ul className="flex flex-wrap mt-4 gap-2 font-bold text-gray-900 justify-center">
          {roundList.map((round, index) => (
            <RoundBtn round={round} key={index} />
          ))}
        </ul>
      </div>

      {/* 마진 병합 해제용 */}
      <div className="p-1"></div>
    </div>
  );
}

const roundList = [
  `본선 1차전`,
  `본선 2차전`,
  `본선 3차전`,
  `준결승전`,
  `결승전`,
];
