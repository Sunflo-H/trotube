import React from "react";

export default function MainCard({ item }) {
  const { title, size } = item;
  console.log(size);
  return <div className={`border ${size} h-72 text-3xl`}>{title}</div>;
}
