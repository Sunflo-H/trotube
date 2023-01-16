import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import MemberCard from "./MemberCard";

export default function Top7() {
  const { data: members } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
  });

  let color = [
    "bg-red-300",
    "bg-orange-300",
    "bg-pink-300",
    "bg-indigo-300",
    "bg-sky-300",
    "bg-emerald-300",
    "bg-amber-200",
  ];

  return (
    <div className="border">
      {/* {members && (
        <ul className="w-full h-4/5  m-auto ">
          {members.map((member, index) => (
            <MemberCard member={member} key={index} index={index} />
          ))}
        </ul>
      )} */}
      <p className="text-2xl font-bold w-5/6 m-auto mb-4">Top 7</p>
      {/* 임영웅 */}
      <ul className="w-4/5 grid grid-cols-8 gap-2 m-auto border p-4 box shadow-2xl">
        <li
          className={`h-92 col-span-2 row-span-2  ${color[0]} cursor-pointer`}
        >
          <img
            className="h-full m-auto"
            src={`/img/${data[0].singer}.png`}
            alt={data[0].singer}
          />
        </li>

        {/* 영탁 */}
        <li className={`col-span-2 h-44 row-span-1 ${color[1]} cursor-pointer`}>
          <img
            className="h-full m-auto"
            src={`/img/${data[1].singer}.png`}
            alt={data[1].singer}
          />
        </li>

        {/* 이찬원 */}
        <li className={`col-span-2 h-44 row-span-1 ${color[2]} cursor-pointer`}>
          <img
            className="h-full m-auto"
            src={`/img/${data[2].singer}.png`}
            alt={data[2].singer}
          />
        </li>

        {/* 김호중 */}
        <li
          className={`col-span-2 h-44 row-span-1  ${color[3]} cursor-pointer`}
        >
          <img
            className="h-full m-auto"
            src={`/img/${data[3].singer}.png`}
            alt={data[3].singer}
          />
        </li>

        {/* 정동원 */}
        <li
          className={` col-span-2 h-44 row-span-1 ${color[4]} cursor-pointer`}
        >
          <img
            className="h-full m-auto"
            src={`/img/${data[4].singer}.png`}
            alt={data[4].singer}
          />
        </li>

        {/* 장민호 */}
        <li
          className={` col-span-2 h-44 row-span-1 ${color[5]} cursor-pointer`}
        >
          <img
            className="h-full m-auto "
            src={`/img/${data[5].singer}.png`}
            alt={data[5].singer}
          />
        </li>

        {/* 김희재 */}
        <li
          className={` col-span-2 h-44 row-span-1 ${color[6]} cursor-pointer`}
        >
          <img
            className=" h-44 m-auto "
            src={`/img/${data[6].singer}.png`}
            alt={data[6].singer}
          />
        </li>
      </ul>

      <div className="h-80"> </div>
      <div className="h-80"> </div>
      <div className="h-80"> </div>
      <div className="h-80"> </div>
      {/* 임영웅 */}
      <div className="flex h-40  flex-col xl:flex-row border">
        <li
          className={`w-40 rounded-full list-none mx-4  ${color[0]} overflow-hidden`}
        >
          <img
            className=" w-40 h-44 object-cover m-auto "
            src={`/img/${data[0].singer}.png`}
            alt={data[0].singer}
          />
        </li>

        {/* 영탁 */}
        <li className={`w-40  rounded-full list-none mx-4 ${color[1]}`}>
          <img
            className=" h-40 object-cover"
            src={`/img/${data[1].singer}.png`}
            alt={data[1].singer}
          />
        </li>

        {/* 이찬원 */}
        <li
          className={`w-40  rounded-full list-none mx-4 ${color[2]} overflow-hidden`}
        >
          <img
            className="w-40 h-40 object-contain ml-1"
            src={`/img/${data[2].singer}.png`}
            alt={data[2].singer}
          />
        </li>

        {/* 김호중 */}
        <li
          className={`w-40 rounded-full list-none mx-4 ${color[3]} overflow-hidden`}
        >
          <img
            className="w-40 h-40 object-contain "
            src={`/img/${data[3].singer}.png`}
            alt={data[3].singer}
          />
        </li>

        {/* 정동원 */}
        <li
          className={` w-40 rounded-full list-none mx-4 ${color[4]} overflow-hidden`}
        >
          <img
            className="w-36 object-contain m-auto"
            src={`/img/${data[4].singer}.png`}
            alt={data[4].singer}
          />
        </li>

        {/* 장민호 */}
        <li
          className={` w-40  rounded-full list-none mx-4 ${color[5]} overflow-hidden`}
        >
          <img
            className=" h-40 object-cover "
            src={`/img/${data[5].singer}.png`}
            alt={data[5].singer}
          />
        </li>

        {/* 김희재 */}
        <li
          className={`w-40 rounded-full list-none mx-4 ${color[6]} overflow-hidden`}
        >
          <img
            className=" h-40 object-cover  "
            src={`/img/${data[6].singer}.png`}
            alt={data[6].singer}
          />
        </li>
      </div>

      <div className="h-40"> </div>

      {/* 임영웅 */}
      <div className="flex flex-col xl:flex-row border">
        <li
          className={`w-40 h-40 rounded-lg list-none mx-4  ${color[0]} overflow-hidden`}
        >
          <img
            className=" w-40 h-44 object-cover m-auto "
            src={`/img/${data[0].singer}.png`}
            alt={data[0].singer}
          />
        </li>

        {/* 영탁 */}
        <li className={`w-40 h-40 rounded-lg list-none mx-4 ${color[1]}`}>
          <img
            className=" h-40 object-cover"
            src={`/img/${data[1].singer}.png`}
            alt={data[1].singer}
          />
        </li>

        {/* 이찬원 */}
        <li
          className={`w-40 h-40 rounded-lg list-none mx-4 ${color[2]} overflow-hidden`}
        >
          <img
            className="w-40 h-40 object-contain ml-1"
            src={`/img/${data[2].singer}.png`}
            alt={data[2].singer}
          />
        </li>

        {/* 김호중 */}
        <li
          className={`w-40 h-40 rounded-lg list-none mx-4 ${color[3]} overflow-hidden`}
        >
          <img
            className="w-40 h-40 object-contain "
            src={`/img/${data[3].singer}.png`}
            alt={data[3].singer}
          />
        </li>

        {/* 정동원 */}
        <li
          className={` w-40 h-40 rounded-lg list-none mx-4 ${color[4]} overflow-hidden`}
        >
          <img
            className="w-36 object-contain m-auto"
            src={`/img/${data[4].singer}.png`}
            alt={data[4].singer}
          />
        </li>

        {/* 장민호 */}
        <li
          className={` w-40 h-40 rounded-lg list-none mx-4 ${color[5]} overflow-hidden`}
        >
          <img
            className=" h-40 object-cover "
            src={`/img/${data[5].singer}.png`}
            alt={data[5].singer}
          />
        </li>

        {/* 김희재 */}
        <li
          className={`w-40 h-40 rounded-lg list-none mx-4 ${color[6]} overflow-hidden`}
        >
          <img
            className=" h-40 object-cover  "
            src={`/img/${data[6].singer}.png`}
            alt={data[6].singer}
          />
        </li>
      </div>
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
