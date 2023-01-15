import React, { useEffect, useState } from "react";

export default function CategoryFilterItem({ title, category, setCategory }) {
  const handleClick = () => {
    setCategory(title);
  };

  return (
    <>
      <li
        className={`rounded-md basis-1/4 px-2 py-1 m-2 text-center font-medium cursor-pointer  
        ${
          category === title
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={handleClick}
      >
        {title}
      </li>
    </>
  );
}
