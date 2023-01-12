import React from "react";

export default function VideoCard({ video }) {
  const { channelTitle, publishedAt, title, thumbnails } = video.snippet;
  console.log(title);
  return (
    <li className=" bg-blue-400 cursor-pointer">
      <img src={thumbnails.medium.url} alt={title} className="rounded-xl" />

      <div className="px-2">
        <div className="text-xl font-semibold">{channelTitle}</div>
        <div>{title}</div>
        <div>{publishedAt}</div>
      </div>
    </li>
  );
}
