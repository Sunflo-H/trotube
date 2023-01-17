import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";

export default function Videos({ round }) {
  const { keyword } = useParams();
  const { data: videosByKeyword } = useQuery({
    queryKey: ["videos", keyword],
    queryFn,
  });

  const { data: videos } = useQuery({
    queryKey: ["videos", round],
    queryFn,
  });

  console.log(videos);

  return (
    <div>
      <div className="">
        {videos && (
          <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
            {videos.map((video, index) =>
              index > 4 ? "" : <VideoCard video={video[0]} key={video[0].id} />
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

const queryFn = async ({ queryKey }) => {
  let url = `/data/mrtrot1/${queryKey[1]}.json`;

  const { data } = await axios.get(url);

  // item의 형식을 일치시키는 코드
  // let items = data.items;
  // data.items.map((item) => {
  //   if (queryKey[1]) item.id = item.id.videoId;
  //   return item;
  // });
  // const result = { items: data.items, nextPageToken: data.nextPageToken };
  const result = data.map((item) => item.items);
  return result;
};
