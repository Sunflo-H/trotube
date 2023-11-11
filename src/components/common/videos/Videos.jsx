import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import VideoCard from "./VideoCard";

export default function Videos({ round, maxVideosOnHomePage }) {
  let { data: videos } = useQuery({
    queryKey: ["videos", round],
    queryFn,
  });

  return (
    <div>
      <div className="">
        {videos && (
          <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
            {videos.slice(0, maxVideosOnHomePage).map((video) => {
              const videoData = video[0];
              return <VideoCard video={videoData} key={videoData.id} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

const queryFn = async ({ queryKey }) => {
  let round = queryKey[1];
  const url = `/data/mrtrot1/${round}.json`;
  const { data } = await axios.get(url);
  let result = data.map((item) => item.items);

  return result;
};
