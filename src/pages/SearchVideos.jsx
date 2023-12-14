import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import axios from "axios";
import VideoCard from "../components/common/videos/VideoCard";
// import { fetchSearchData } from "../utils/infinityScroll";

export default function SearchVideos() {
  const { keyword } = useParams();
  // const [videoData, setVideoData] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [render, setRender] = useState(false);
  const [requireFetch, setRequireFetch] = useState(false);

  // useEffect(() => {
  //   fetchData(keyword, nextPageToken).then((data) => {
  //     setVideoList(data.videos);
  //     setNextPageToken(data.nextPageToken);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchData(keyword, nextPageToken).then((data) => {
  //     setVideoList(data.videos);
  //     setNextPageToken(data.nextPageToken);
  //   });
  // }, []);

  useEffect(() => {
    fetchData().then((data) => {
      setVideoList((prev) => prev.concat(data.videos));
      setNextPageToken(data.nextPageToken);
    });
  }, [requireFetch]);

  function handleInfinityScroll() {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    if ((scrollTop + clientHeight) / scrollHeight >= 0.9) {
      console.log(nextPageToken);
      fetchData(keyword, nextPageToken).then((data) => {
        console.log(keyword, nextPageToken);
        console.log(data);
      });
      // setRequireFetch((prev) => !prev);
    }
  }

  async function fetchData() {
    // const data = await fetchSearchData(keyword, nextPageToken);
    const data = await fetchMocData(keyword, nextPageToken);
    return data;
    setVideoList((prevVideoList) => prevVideoList.concat(data.videos));
    setNextPageToken(data.nextPageToken);
  }

  const debounceScroll = debounce(handleInfinityScroll, 300);
  useEffect(() => {
    window.addEventListener("scroll", debounceScroll);
    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setRender((prev) => !prev)}>강제렌더링</button>
      <div className="fixed bold bg-red-500">{nextPageToken}</div>
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

const fetchMocData = async (keyword, nextPageToken) => {
  console.log(`fetchMocData 에서 사용된 token : ${nextPageToken}`);
  let url;
  switch (nextPageToken) {
    case "CBQQAA":
      url = `/data/moc2.json`;
      break;
    case "CCgQAA":
      url = `/data/moc3.json`;
      break;
    case "CDwQAA":
      url = `/data/moc4.json`;
      break;
    default:
      url = `/data/moc1.json`;
      break;
  }

  const { data } = await axios.get(url);
  let videos = data.items
    .map((item) => {
      item.id = item.id.videoId;
      return item;
    })
    .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

  let result = { videos, nextPageToken: data.nextPageToken };

  return result;
};

/**
 * 스크롤 이벤트가 너무 많이 실행되는 것을 막아주는 함수
 * @param {*} func
 * @param {*} delay
 * @returns
 */
function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const fetchSearchData = async (keyword, nextPageToken) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const SEARCH_RESULT_COUNT = 20;
  const url = nextPageToken
    ? `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&pageToken=${nextPageToken}&key=${key}`
    : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&key=${key}`;
  const { data } = await axios.get(url);
  console.log(data);
  console.log(url);
  console.log(nextPageToken);
  let newNextPageToken = data.nextPageToken;

  let videos = data.items
    .map((item) => {
      item.id = item.id.videoId;
      return item;
    })
    .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

  return { videos, newNextPageToken };
};
