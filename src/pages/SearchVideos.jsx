import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import VideoCard from "../components/common/videos/VideoCard";
// import { fetchSearchData } from "../utils/infinityScroll";

export default function SearchVideos() {
  const [videoList, setVideoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { keyword } = useParams();
  const [nextPageToken, setNextPageToken] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("비디오 리스트 변경");
    setIsLoading(true);
    console.log(videoList);
  }, [videoList]);

  async function handleInfinityScroll() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if ((scrollTop + clientHeight) / scrollHeight >= 0.8) {
      fetchData();
    }
  }

  async function fetchData() {
    console.log("fetch 실행");
    const data = await fetchSearchData(keyword, nextPageToken);
    // const data = await fetchMocData(keyword, nextPageToken);
    setVideoList([...videoList, ...data.videos]);
    setNextPageToken(data.newNextPageToken);
  }

  function debounce(func, delay) {
    let timerId;

    return function (...args) {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debounceScroll = debounce(handleInfinityScroll, 300);
  useEffect(() => {
    // window.addEventListener("scroll", handleInfinityScroll);
    window.addEventListener("scroll", debounceScroll);
    return () => {
      // window.removeEventListener("scroll", handleInfinityScroll);
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  return (
    <div>
      {videoList && (
        <ul className="grid gap-4 max-w-screen-2xl grid-cols-1 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
          {videoList.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

const fetchSearchData = async (keyword, nextPageToken) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const SEARCH_RESULT_COUNT = 20;
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
const fetchMocData = async (keyword, nextPageToken) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const SEARCH_RESULT_COUNT = 20;
  const url = nextPageToken ? `/data/moc2.json` : `/data/moc1.json`;
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
