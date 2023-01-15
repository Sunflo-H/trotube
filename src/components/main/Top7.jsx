import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import MemberCard from "./MemberCard";

export default function Top7() {
  const { data: members } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
  });
  return (
    <>
      {members && (
        <ul className="w-full h-4/5  m-auto ">
          {members.map((member, index) => (
            <MemberCard member={member} key={index} index={index} />
          ))}
        </ul>
      )}
    </>
  );
}

async function getMember({ queryKey }) {
  const { data } = await axios.get("/data/mrtrot1/member.json");
  return data;
}
