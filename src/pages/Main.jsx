import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Category from "../components/main/Category";
import MainCard from "../components/main/MainCard";
import MainVideos from "../components/main/MainVideos";
import MemberCard from "../components/main/MemberCard";
import Member from "../components/main/MemberCard";
import Videos from "../components/main/Videos";

export default function Main() {
  const { data: members } = useQuery({ queryKey: [], queryFn: getMember });

  return (
    // 그리드
    // <div className="relative w-full max-w-screen-2xl grid grid-cols-8 gap-4  m-auto items-center bg-red-500">
    // 뮤직
    <div className="relative   w-full h-full    ">
      <Category />

      {/* Smart TV UI */}
      {/* {mrtrot_s1.map((item) => (
        <MainCard item={item} />
      ))} */}

      {/* Music Player List UI */}
      {/* <div className="text-4xl font-bold  ">Top 7</div> */}
      {members && (
        <ul className="w-full h-4/5 p-10 m-auto bg-red-500">
          {members.map((member, index) => (
            <MemberCard member={member} key={index} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

const size = { sm: "col-span-2", md: "col-span-3", lg: "col-span-5" };

const mrtrot_s1 = [
  { title: "Top 7", size: size.lg },
  { title: "결승전", size: size.md },
  { title: "준결승전", size: size.sm },
  { title: "본선 3차전", size: size.sm },
  { title: "본선 2차전", size: size.sm },
  { title: "본선 1차전", size: size.sm },
];

async function getMember({ queryKey }) {
  const { data } = await axios.get("/data/mrtrot1/member.json");
  return data;
}
