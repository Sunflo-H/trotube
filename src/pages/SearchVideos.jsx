import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/common/videos/VideoCard";
import { getSearchVideos } from "../queryFn/youtubeQueries";

export default function SearchVideos() {
  const { keyword } = useParams();

  let { data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: getSearchVideos,
  });

  return (
    <div>
      {videos && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
