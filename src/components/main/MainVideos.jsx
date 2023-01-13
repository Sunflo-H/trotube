import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Member from "./Member";
import Videos from "./Videos";

export default function MainVideos() {
  const { data: members } = useQuery({ queryKey: [], queryFn: queryFn });
  //   const { data: members } = useQuery({ queryKey: [], queryFn: queryFn });
  //   const { data: members } = useQuery({ queryKey: [], queryFn: queryFn });

  console.log(members);
  return (
    <div className="flex flex-col items-center w-full h-full max-w-screen-2xl ">
      <ul className="flex mb-10">
        {members && members.map((member) => <Member member={member} />)}
      </ul>
      <div className="">
        <p>결승전 1라운드</p>
        <Videos />
      </div>
      <ul className="flex">결승전 2라</ul>
      <ul className="flex">준결승전 1라</ul>
      <ul className="flex">준결승전 2라</ul>
    </div>
  );
}

async function queryFn({ queryKey }) {
  const { data } = await axios.get("/data/mrtrot1/member.json");
  return data;
}
