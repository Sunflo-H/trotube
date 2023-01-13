import React from "react";
import MainVideos from "../components/main/MainVideos";
import Videos from "../components/main/Videos";

export default function Main() {
  return (
    <div className="relative flex justify-center h-full px-4 bg-gradient-half">
      {/* <Nav></Nav> */}
      <nav className="absolute top-0 left-0 m-4">
        <ul>
          <li>미스터트롯 시즌1</li>
          <li>미스터트롯 시즌2</li>
          <li>불타는트롯맨</li>
        </ul>
      </nav>
      <MainVideos />
      {/* <Videos /> */}
    </div>
  );
}
