import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";

export default function Videos({ round, top7 }) {
  const { keyword } = useParams();

  const { data: videos } = useQuery({
    queryKey: ["videos", keyword, round, top7],
    queryFn,
  });
  console.log(videos);

  if (keyword) {
    return (
      <div>
        {videos && (
          <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
            {videos.map((video, index) => (
              <VideoCard video={video} key={video.id} />
            ))}
          </ul>
        )}
      </div>
    );
  }

  if (round) {
    return (
      <div>
        <div className="">
          {videos && (
            <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
              {videos.map((video, index) =>
                index > 4 ? (
                  ""
                ) : (
                  <VideoCard video={video[0]} key={video[0].id} />
                )
              )}
            </ul>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {videos && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
          {videos.map((video, index) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

const queryFn = async ({ queryKey }) => {
  let type_search = queryKey[1];
  let type_round = queryKey[2];
  let type_top7 = queryKey[3];
  let url;

  let result;
  if (type_search) {
    url = `/data/search.json`;
    const { data } = await axios.get(url);
    data.items.map((item) => {
      if (queryKey[1]) item.id = item.id.videoId;
      return item;
    });
    result = data.items;
  } else if (type_round) {
    url = `/data/mrtrot1/${queryKey[2]}.json`;
    const { data } = await axios.get(url);
    result = data.map((item) => item.items);
  } else if (type_top7) {
    url = `/data/popular.json`;
    const { data } = await axios.get(url);
    result = data.items;
  } else {
    url = `/data/popular.json`;
    const { data } = await axios.get(url);
    result = data.items;
  }

  return result;
};
