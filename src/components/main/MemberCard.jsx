import React from "react";

export default function MemberCard({ member, index }) {
  const { singer, songs } = member;

  const rank = [
    { koText: "진", chText: "眞" },
    { koText: "선", chText: "善" },
    { koText: "미", chText: "美" },
  ];

  return (
    <li className="rounded-md list-none m-4 p-4 border">
      <div className="my-4 px-4 text-3xl font-bold">
        <div>
          {index > 2 ? (
            <>
              <span>{index + 1}</span>
              <span className="text-2xl">위</span>
            </>
          ) : (
            <>
              <span>{rank[index].koText}</span>
              <span className="text-2xl opacity-80">{rank[index].chText}</span>
            </>
          )}
        </div>
        <div
          className={`bg-youtube-red h-1 ${index > 2 ? "w-5" : "w-8"} mt-2`}
        ></div>
      </div>
      <div className="mt-4 text-xl font-semibold px-4 ">{singer}</div>
      <div className="mt-4 rounded-lg  w-48 mb-auto mx-4">
        <img
          className="w-40 h-40 rounded-md cursor-pointer m-auto "
          src={`/img/${singer}.png`}
          alt={singer}
        />
      </div>
    </li>
  );
}
