import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import RelatedVideoCard from "../components/main/RelatedVideoCard";

export default function Detail() {
  const {
    state: { video },
  } = useLocation();

  const { categoryId, channelId, channelTitle, description, title } =
    video.snippet;

  const { data: videos } = useQuery({
    queryKey: ["related", video.id],
    queryFn: getRelatedVideos,
  });

  const { data: channelThumbnails } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: getChannel,
  });
  // console.log(videos);
  console.log(channelThumbnails);
  // const { thumbnails } = channel.snippet;
  return (
    <div className="flex">
      <section className="basis-9/12 px-2">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          // title={title}
        ></iframe>
        <div>
          <div className="text-xl font-semibold my-4">{title}</div>
          <div className="flex items-center my-2">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={channelThumbnails && channelThumbnails.medium.url}
              alt={channelTitle}
            />
            <div className="font-semibold">{channelTitle}</div>
          </div>
          {/* 클릭하기 전이면 이거 */}
          <pre className="text-sm whitespace-pre-wrap bg-gray-100 px-4 py-3 rounded-2xl h-24 overflow-hidden">
            {description}
          </pre>
        </div>
      </section>
      <section className="basis-3/12 px-2">
        {videos && (
          <ul>
            {videos.items.map((video) => (
              <RelatedVideoCard video={video} key={video.id} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

const getRelatedVideos = async ({ queryKey }) => {
  const url = `/data/related.json`;

  const { data } = await axios.get(url);

  // item의 형식을 일치시키는 코드
  //   let items = data.items;
  data.items.map((item) => {
    item.id = item.id.videoId;
    return item;
  });

  const result = { items: data.items, nextPageToken: data.nextPageToken };

  return result;
};

const getChannel = async ({ queryKey }) => {
  const url = `/data/channel.json`;

  const { data } = await axios.get(url);

  return data.items[0].snippet.thumbnails;
};
