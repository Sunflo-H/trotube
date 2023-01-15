import React from "react";

export default function MemberCard({ member, index }) {
  const { singer, songs } = member;
  let color = [
    "bg-red-300",
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-purple-300",
  ];

  const rank = [
    { koText: "진", chText: "眞" },
    { koText: "선", chText: "善" },
    { koText: "미", chText: "美" },
  ];

  return (
    <li className={`flex rounded-md list-none m-4 shadow-test bg-dribble-bg`}>
      <div className=" rounded-lg w-48 mb-auto mx-4">
        <img
          className=" cursor-pointer m-auto py-2"
          src={`/img/${singer}.png`}
          alt={singer}
        />
      </div>
      <div>
        <div className=" px-4 text-3xl font-bold">
          <div>
            {index > 2 ? (
              <>
                <span>{index + 1}</span>
                <span className="text-2xl">위</span>
              </>
            ) : (
              <>
                <span>{rank[index].koText}</span>
                <span className="text-2xl opacity-80">
                  {rank[index].chText}
                </span>
              </>
            )}
          </div>
          <div
            className={`bg-youtube-red h-1 ${index > 2 ? "w-5" : "w-8"} mt-2`}
          ></div>
        </div>
        <div className="mt-4 text-xl font-semibold px-4">{singer}</div>
      </div>
    </li>
  );
}
