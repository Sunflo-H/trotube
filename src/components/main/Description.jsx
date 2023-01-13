import React from "react";

export default function Description({ description, show, handleClick }) {
  return (
    <>
      {show ? (
        <pre className="text-sm whitespace-pre-wrap bg-gray-100 px-4 py-3 rounded-2xl">
          {description}
          <div className="mt-10 font-semibold">
            <span className=" cursor-pointer" onClick={handleClick}>
              show less
            </span>
          </div>
        </pre>
      ) : (
        <div
          className="relative bg-gray-100 px-4 pt-3 pb-8 rounded-2xl cursor-pointer hover:bg-gray-200 "
          onClick={handleClick}
        >
          <pre className=" text-sm whitespace-pre-wrap  h-10 overflow-hidden ">
            {description}
            <p className="absolute bottom-1 font-semibold top">show more</p>
          </pre>
        </div>
      )}
    </>
  );
}
