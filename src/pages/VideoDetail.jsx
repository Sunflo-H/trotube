import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import VideoCard from "../components/main/VideoCard";

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
  console.log(videos);
  console.log(channelThumbnails);
  // const { thumbnails } = channel.snippet;
  return (
    <div className="flex">
      <section className="basis-4/6">
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
          <div className="text-xl font-semibold">{title}</div>
          <div className="flex items-center my-2">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src={channelThumbnails.medium.url}
              alt={channelTitle}
            />
            <div>{channelTitle}</div>
          </div>
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </section>
      <section className="basis-2/6">
        {videos && (
          <ul>
            {videos.items.map((video) => (
              <VideoCard video={video} key={video.id} />
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
