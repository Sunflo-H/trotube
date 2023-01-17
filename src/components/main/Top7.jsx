import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import MemberCard from "./MemberCard";
import Videos from "./Videos";

export default function Top7() {
  const { data: members } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
  });

  const BRIGHTNESS = 200;

  const color = [
    `bg-rose-${BRIGHTNESS}`,
    `bg-orange-${BRIGHTNESS}`,
    `bg-pink-${BRIGHTNESS}`,
    `bg-indigo-${BRIGHTNESS}`,
    `bg-sky-${BRIGHTNESS}`,
    `bg-blue-${BRIGHTNESS}`,
    `bg-green-${BRIGHTNESS}`,
  ];

  return (
    <div className="">
      <p>Top 7 🔥</p>
      <ul className="flex flex-col border lg:grid grid-cols-c8 grid-rows-c2 gap-2 p-4 shadow-2xl  m-auto">
        {/* {members &&
          members.map((member, index) => (
            <MemberCard member={member} key={index} index={index} />
          ))} */}
        <li className={`영 h-92  cursor-pointer hover:scale-105 duration-300`}>
          <img
            className="h-full m-auto  "
            src={`/img/${data[0].singer}.png`}
            alt={data[0].singer}
          />
        </li>

        <li className={`탁 cursor-pointer hover:scale-110 duration-300`}>
          <img
            className="h-full m-auto"
            src={`/img/${data[1].singer}.png`}
            alt={data[1].singer}
          />
        </li>

        <li className={`찬 cursor-pointer hover:scale-110 duration-300`}>
          <img
            className="h-full m-auto"
            src={`/img/${data[2].singer}.png`}
            alt={data[2].singer}
          />
        </li>

        <li className={`호 cursor-pointer hover:scale-110 duration-300`}>
          <img
            className="h-full m-auto"
            src={`/img/${data[3].singer}.png`}
            alt={data[3].singer}
          />
        </li>

        <li className={`동 cursor-pointer hover:scale-110 duration-300`}>
          <img
            className="h-full m-auto"
            src={`/img/${data[4].singer}.png`}
            alt={data[4].singer}
          />
        </li>

        <li
          className={`민 cursor-pointer overflow-hidden hover:scale-110 duration-300`}
        >
          <img
            className="h-full m-auto mt-4"
            src={`/img/${data[5].singer}.png`}
            alt={data[5].singer}
          />
        </li>

        <li
          className={`희 cursor-pointer overflow-hidden hover:scale-110 duration-300`}
        >
          <img
            className=" h-full m-auto "
            src={`/img/${data[6].singer}.png`}
            alt={data[6].singer}
          />
        </li>
      </ul>
    </div>
  );
}

async function getMember({ queryKey }) {
  const { data } = await axios.get("/data/mrtrot1/member.json");
  return data;
}

const data = [
  {
    singer: "임영웅",
    songs: [
      {
        제목: "사랑은 늘 도망가",
        videoId: "pBEAzM2TRmE",
      },
    ],
    color: "bg-dribble-red",
  },
  {
    singer: "영탁",
    songs: [
      {
        제목: "사랑은 늘 도망가",
        videoId: "pBEAzM2TRmE",
      },
    ],
    color: "bg-orange-200",
  },
  {
    singer: "이찬원",
    songs: [
      {
        제목: "사랑은 늘 도망가",
        videoId: "pBEAzM2TRmE",
      },
    ],
    color: "bg-yello-900",
  },
  {
    singer: "김호중",
    songs: [
      {
        제목: "사랑은 늘 도망가",
        videoId: "pBEAzM2TRmE",
      },
    ],
    color: "bg-green-200",
  },
  {
    singer: "정동원",
    songs: [
      {
        제목: "사랑은 늘 도망가",
        videoId: "pBEAzM2TRmE",
      },
    ],
    color: "bg-blue-200",
  },
  {
    singer: "장민호",
    songs: [
      {
        제목: "사랑은 늘 도망가",
        videoId: "pBEAzM2TRmE",
      },
    ],
    color: "bg-indigo-200",
  },
  {
    singer: "김희재",
    songs: [
      {
        제목: "사랑은 늘 도망가",
        videoId: "pBEAzM2TRmE",
      },
    ],
    color: "bg-purple-200",
  },
];
