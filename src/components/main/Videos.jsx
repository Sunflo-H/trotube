import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import VideoCard from "./VideoCard";

/**
 * 검색, 라운드, Top7에 대한 비디오를 조건에 따라 보여주는 컴포넌트.
 */
export default function Videos({ round, count }) {
  const { keyword } = useParams();

  const { data: videos } = useQuery({
    queryKey: ["videos", keyword, round],
    queryFn,
  });

  // 키워드가 있다면 검색한 비디오 목록을 보여준다.
  if (keyword) {
    return (
      <div>
        {videos && (
          <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
            {videos.map((video) => (
              <VideoCard video={video} key={video.id} />
            ))}
          </ul>
        )}
      </div>
    );
  }

  // 라운드가 있다면 라운드별 비디오 목록을 보여준다.

  return (
    <div>
      <div className="">
        {videos && (
          <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 ">
            {videos.map((video, index) =>
              index > count ? (
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

const queryFn = async ({ queryKey }) => {
  let type_search = queryKey[1];
  let type_round = queryKey[2];
  let url;
  let result;
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  if (type_search) {
    url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${type_search}&key=${key}`;
    const { data } = await axios.get(url);
    data.items.map((item) => {
      if (queryKey[1]) item.id = item.id.videoId;
      return item;
    });
    result = data.items;
  } //
  else if (type_round) {
    url = `/data/mrtrot1/${queryKey[2]}.json`;
    const { data } = await axios.get(url);
    result = data.map((item) => item.items);
  } //

  return result;
};
