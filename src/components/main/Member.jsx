import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Member({ member }) {
  const { singer, songs } = member;

  return (
    // <li className=" flex  m-4 p-2 w-80 bg-gradient-to-r from-mt-main to-mt-sub rounded-xl">
    //   <div className="text-5xl text-white m-auto">{singer}</div>
    //   <img
    //     className="rounded-md cursor-pointer m-auto"
    //     src={`/img/${singer}.png`}
    //     alt={singer}
    //   />
    // </li>

    // <li className=" flex m-4 p-2 max-w-screen-2xl rounded-xl">
    //   <div className=" bg-gradient-radial rounded-lg p-2 ">
    //     <img
    //       className="rounded-md cursor-pointer m-auto"
    //       src={`/img/${singer}.png`}
    //       alt={singer}
    //     />
    //     <div className="text-xl font-semibold mt-1 text-center text-white m-auto">
    //       {singer}
    //     </div>
    //   </div>
    //   <div className="flex items-center ">
    //     <IoIosArrowBack className=" text-3xl" />
    //     <ul className="flex w-full bg-blue-500">
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //     </ul>
    //     <IoIosArrowForward className=" text-3xl" />
    //   </div>
    // </li>

    // <li>
    //   <div>{singer}</div>
    //   <div className="flex items-center ">
    //     <IoIosArrowBack className=" text-3xl" />

    //     <ul className="flex w-full bg-blue-500">
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //       <li className="w-40 h-40 bg-red-500 m-1">1</li>
    //     </ul>

    //     <IoIosArrowForward className=" text-3xl" />
    //   </div>
    // </li>

    <li className="  m-4 rounded-xl border-rose-50 border overflow-hidden">
      <div className=" bg-gradient-basic rounded-lg p-2 ">
        <img
          className="rounded-md cursor-pointer m-auto"
          src={`/img/${singer}.png`}
          alt={singer}
        />
        <div className="text-xl font-semibold mt-1 text-center text-white m-auto">
          {singer}
        </div>
      </div>
    </li>
  );
}
