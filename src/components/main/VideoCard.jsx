import React from "react";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { channelTitle, publishedAt, title, thumbnails } = video.snippet;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };

  return (
    <li
      className=" cursor-pointer px-14 mb-4 md:p-0 md:m-0"
      onClick={handleClick}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="rounded-xl w-full"
      />

      <div className="px-px">
        <div className="text-xl font-semibold">{channelTitle}</div>
        <div>{title}</div>
        <div>{publishedAt}</div>
      </div>
    </li>
  );
}
