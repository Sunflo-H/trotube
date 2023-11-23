import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";

export default function SearchVideos() {
  const [videoList, setVideoList] = useState([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const { keyword } = useParams();
  const prevKeywordRef = useRef("");

  let pageToken = null;

  // let { data } = useQuery({
  //   queryKey: ["videos", keyword, pageToken],
  //   queryFn: getSearchVideos,
  // });
  const getData = async (keyrod, nextPageToken) => {
    const key = process.env.REACT_APP_YOUTUBE_API_KEY;
    const SEARCH_RESULT_COUNT = 50;
    const url = nextPageToken
      ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&pageToken=${nextPageToken}&key=${key}`
      : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&key=${key}`;
    const { data } = await axios.get(url);

    let newNextPageToken = data.nextPageToken;

    let videos = data.items
      .map((item) => {
        item.id = item.id.videoId;
        return item;
      })
      .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

    return { videos, newNextPageToken };
  };
  useEffect(() => {
    const data = getData(keyword, null);
    setVideoList(data.videos);
  }, [keyword]);

  // const { videos, nextPageToken } = data || [];

  // useEffect(() => {
  //   if (data) {
  //     if (prevKeywordRef.current === keyword) {
  //       console.log(1);
  //       setVideoList((prevVideos) => prevVideos.concat(videos));
  //     } else {
  //       console.log(2);
  // setVideoList(data.videos);
  //     }
  //   }
  //   prevKeywordRef.current = keyword;
  // }, [data, keyword]);

  // const handleInfinityScroll = () => {
  //   if (isScrolling) return;
  //   const clientHeight = document.documentElement.clientHeight;
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;

  //   if ((scrollTop + clientHeight) / scrollHeight >= 0.8) {
  //     setIsScrolling(true); // 스크롤 중 상태로 설정

  //     // 데이터를 가져오는 로직

  //     setIsScrolling(false); // 스크롤 완료 후 상태 변경
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleInfinityScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleInfinityScroll);
  //   };
  // }, []);

  return (
    <div>
      {/* {videoList && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {videoList.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )} */}
    </div>
  );
}
