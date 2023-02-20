import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Channel from "../components/main/Channel";
import Description from "../components/main/Description";
import RelatedVideoCard from "../components/main/RelatedVideoCard";

export default function VideoDetail() {
  const [show, setShow] = useState(false);
  const {
    state: { video },
  } = useLocation();

  const { data: realVideos } = useQuery({
    queryKey: ["realVideos", video.id],
    queryFn: getRealVideos,
  });

  const { channelId, description, title } = video.snippet;

  // 새 비디오디테일 페이지로 이동했을때 show state를 초기화한다.
  useEffect(() => {
    setShow(false);
  }, [video]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row max-w-screen-2xl ">
        <section className="basis-9/12 sm:px-2">
          <iframe
            className="hidden sm:block"
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
            allow="fullscreen"
          ></iframe>
          <iframe
            className=" sm:hidden px-2"
            id="player"
            type="text/html"
            width="100%"
            height="300px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
            allow="fullscreen"
          ></iframe>
          <div className="w-full">
            <div className="px-2 text-xl font-semibold my-4">{title}</div>
            <Channel channelId={channelId} />

            {description && (
              <Description
                description={description}
                show={show}
                setShow={setShow}
              />
            )}
          </div>
        </section>
        <section className="basis-3/12 px-2">
          {/* {relatedVideos && (
            <ul>
              {relatedVideos.items.map((video) => (
                <RelatedVideoCard video={video} key={video.id} />
              ))}
            </ul>
          )} */}
          {realVideos && (
            <ul>
              {realVideos.map((video) => (
                <RelatedVideoCard video={video} key={video.id} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

const getRelatedVideos = async ({ queryKey }) => {
  const url = `/data/related.json`;

  const { data } = await axios.get(url);

  // item의 형식을 일치시키는 코드
  data.items.map((item) => {
    item.id = item.id.videoId;
    return item;
  });

  const result = { items: data.items, nextPageToken: data.nextPageToken };

  return result;
};

const getRealVideos = async ({ queryKey }) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryKey[1]}&type=video&maxResults=10&key=${key}`;
  const { data } = await axios.get(url);
  const result = data.items.map((item) => ({ ...item, id: item.id.videoId }));
  return result;
};
