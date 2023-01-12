import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/main/VideoCard";

export default function Videos() {
  const { keyword } = useParams();
  const { data: videos } = useQuery({
    queryKey: ["videos", keyword],
    queryFn,
  });

  console.log("최종 데이터", videos);

  //   console.log(items);

  return (
    <div>
      {videos && (
        <ul className="grid gap-2 grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
          {videos.items.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

const queryFn = async ({ queryKey }) => {
  let url = queryKey[1] ? `/data/search.json` : `/data/popular.json`;

  const { data } = await axios.get(url);

  // item의 형식을 일치시키는 코드
  //   let items = data.items;
  data.items.map((item) => {
    if (queryKey[1]) item.id = item.id.videoId;
    return item;
  });

  const result = { items: data.items, nextPageToken: data.nextPageToken };

  return result;
};
