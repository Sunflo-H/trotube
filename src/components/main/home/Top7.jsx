import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import MemberCard from "../MemberCard";
import Videos from "../Videos";
import Top7Card from "./Top7Card";

export default function Top7() {
  const { data: members } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
  });

  return (
    <>
      <p className=" sm:hidden text-3xl font-bold mb-4 px-4">Top 7</p>
      {members && (
        <ul className="grid grid-cols-8 grid-rows-c3 lg:grid-cols-c8 lg:grid-rows-c2 lg:rounded-none rounded-2xl gap-2 p-4 shadow-2xl  m-auto">
          {members.map((member, index) => (
            <Top7Card member={member} key={index} />
          ))}
          {/* <li className={`영 cursor-pointer hover:scale-110 duration-300`}>
            <img
              className="h-full m-auto  "
              src={`/img/${members[0].singer}.png`}
              alt={members[0].singer}
            />
          </li>

          <li className={`탁 cursor-pointer hover:scale-110 duration-300`}>
            <img
              className="h-full m-auto"
              src={`/img/${members[1].singer}.png`}
              alt={members[1].singer}
            />
          </li>

          <li className={`찬 cursor-pointer hover:scale-110 duration-300`}>
            <img
              className="h-full m-auto"
              src={`/img/${members[2].singer}.png`}
              alt={members[2].singer}
            />
          </li>

          <li className={`호 cursor-pointer hover:scale-110 duration-300`}>
            <img
              className="h-full m-auto"
              src={`/img/${members[3].singer}.png`}
              alt={members[3].singer}
            />
          </li>

          <li className={`동 cursor-pointer hover:scale-110 duration-300`}>
            <img
              className="h-full m-auto"
              src={`/img/${members[4].singer}.png`}
              alt={members[4].singer}
            />
          </li>

          <li className={`민 cursor-pointer hover:scale-110 duration-300`}>
            <img
              className="h-full m-auto pt-2 "
              src={`/img/${members[5].singer}.png`}
              alt={members[5].singer}
            />
          </li>

          <li className={`희 cursor-pointer hover:scale-110 duration-300`}>
            <img
              className=" h-full m-auto "
              src={`/img/${members[6].singer}.png`}
              alt={members[6].singer}
            />
          </li> */}
        </ul>
      )}
    </>
  );
}

async function getMember({ queryKey }) {
  const { data } = await axios.get("/data/mrtrot1/member.json");

  return data;
}

// const data = [
//   {
//     singer: "임영웅",
//     songs: [
//       {
//         제목: "사랑은 늘 도망가",
//         videoId: "pBEAzM2TRmE",
//       },
//     ],
//     color: "bg-dribble-red",
//   },
//   {
//     singer: "영탁",
//     songs: [
//       {
//         제목: "사랑은 늘 도망가",
//         videoId: "pBEAzM2TRmE",
//       },
//     ],
//     color: "bg-orange-200",
//   },
//   {
//     singer: "이찬원",
//     songs: [
//       {
//         제목: "사랑은 늘 도망가",
//         videoId: "pBEAzM2TRmE",
//       },
//     ],
//     color: "bg-yello-900",
//   },
//   {
//     singer: "김호중",
//     songs: [
//       {
//         제목: "사랑은 늘 도망가",
//         videoId: "pBEAzM2TRmE",
//       },
//     ],
//     color: "bg-green-200",
//   },
//   {
//     singer: "정동원",
//     songs: [
//       {
//         제목: "사랑은 늘 도망가",
//         videoId: "pBEAzM2TRmE",
//       },
//     ],
//     color: "bg-blue-200",
//   },
//   {
//     singer: "장민호",
//     songs: [
//       {
//         제목: "사랑은 늘 도망가",
//         videoId: "pBEAzM2TRmE",
//       },
//     ],
//     color: "bg-indigo-200",
//   },
//   {
//     singer: "김희재",
//     songs: [
//       {
//         제목: "사랑은 늘 도망가",
//         videoId: "pBEAzM2TRmE",
//       },
//     ],
//     color: "bg-purple-200",
//   },
// ];
