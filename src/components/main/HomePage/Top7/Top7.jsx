import { useQuery } from "@tanstack/react-query";
import React from "react";
import Top7Card from "./Top7Card";
import { getMember } from "../../../../queryFn/trotQueries";

export default function Top7() {
  const { data: members } = useQuery({
    queryKey: ["member"],
    queryFn: getMember,
  });

  return (
    <>
      <p className=" sm:hidden text-3xl font-bold mb-4 px-4">Top 7</p>
      {members && (
        <ul
          className="grid lg:rounded-none rounded-2xl gap-2 p-4 shadow-2xl  m-auto
                      grid-cols-8 grid-rows-c3 lg:grid-cols-c8 lg:grid-rows-c2 "
        >
          {members.map((member, index) => (
            <Top7Card member={member} key={index} />
          ))}
        </ul>
      )}
    </>
  );
}
