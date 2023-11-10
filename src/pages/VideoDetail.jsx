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
  const { channelId, description, title } = video.snippet;

  const getRelatedVideos = async ({ queryKey }) => {
    const key = process.env.REACT_APP_YOUTUBE_API_KEY;
    // 지금은 사라진 연관동영상리스트 url (혹시 몰라서 남겨둡니다.)
    // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryKey[1]}&type=video&maxResults=10&key=${key}`;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${title}&key=${key}`;
    const { data } = await axios.get(url);
    const result = data.items
      .map((item) => ({ ...item, id: item.id.videoId }))
      .filter((item, i) => i !== 0);
    return result;
  };

  const { data: relatedVideos } = useQuery({
    queryKey: ["relatedVideos", video.id],
    queryFn: getRelatedVideos,
  });

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
          {relatedVideos && (
            <ul>
              {relatedVideos.map((video) => (
                <RelatedVideoCard video={video} key={video.id} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
