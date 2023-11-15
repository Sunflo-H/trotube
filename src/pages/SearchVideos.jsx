import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/common/videos/VideoCard";
import axios from "axios";

export default function SearchVideos() {
  const { keyword } = useParams();

  let { data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn,
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

const queryFn = async ({ queryKey }) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const keyword = queryKey[1];
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${key}`;
  const { data } = await axios.get(url);
  let result = data.items
    .map((item) => {
      item.id = item.id.videoId;
      return item;
    })
    .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

  return result;
};
