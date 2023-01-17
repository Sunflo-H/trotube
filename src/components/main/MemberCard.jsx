import React from "react";

export default function MemberCard({ member, index }) {
  const { singer, songs } = member;
  let color = [
    "bg-red-300",
    "bg-orange-300",
    "bg-blue-200",
    "bg-green-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-purple-300",
  ];

  let sizeDetail = [""];

  const rank = [
    { koText: "진", chText: "眞" },
    { koText: "선", chText: "善" },
    { koText: "미", chText: "美" },
  ];

  return (
    <li
      className={`flex  w-40 h-40 rounded-2xl list-none m-4 ${color[index]} overflow-hidden`}
    >
      <div className=" rounded-lg ">
        <img
          className="w-40 h-40 object-scale-down "
          // className="w-40 h-40 object-cover "
          src={`/img/${singer}.png`}
          alt={singer}
        />
      </div>
    </li>
  );
}
