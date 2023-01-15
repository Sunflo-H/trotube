import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Member from "./MemberCard";
import Videos from "./Videos";

export default function MainVideos() {
  const { data: members } = useQuery({ queryKey: [], queryFn: getMember });

  return (
    <div className="flex justify-center">
      <Videos />
    </div>
  );
}

async function getMember({ queryKey }) {
  const { data } = await axios.get("/data/mrtrot1/member.json");
  return data;
}
