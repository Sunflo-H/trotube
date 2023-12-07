import axios from "axios";
import { useState } from "react";

// export const handleInfinityScroll = () => {
//   const [isScrolling, setIsScrolling] = useState(false);
//   if (isScrolling) return;
//   const clientHeight = document.documentElement.clientHeight;
//   const scrollHeight = document.documentElement.scrollHeight;
//   const scrollTop = document.documentElement.scrollTop;

//   if ((scrollTop + clientHeight) / scrollHeight >= 0.8) {
//     setIsScrolling(true); // 스크롤 중 상태로 설정

//     setRoundList((prevRoundList) => [...prevRoundList, "결승전"]);

//     setIsScrolling(false); // 스크롤 완료 후 상태 변경
//   }
// };

export const getData = async (keyword, nextPageToken) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const SEARCH_RESULT_COUNT = 20;
  const url = nextPageToken
    ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&pageToken=${nextPageToken}&key=${key}`
    : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&key=${key}`;
  const { data } = await axios.get(url);
  console.log(url);
  let newNextPageToken = data.nextPageToken;

  let videos = data.items
    .map((item) => {
      item.id = item.id.videoId;
      return item;
    })
    .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

  console.log(videos);
  return { videos, newNextPageToken };
};
