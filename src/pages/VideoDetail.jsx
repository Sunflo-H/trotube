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
  // console.log(video);
  /**
   * 비디오의 아이디를 받아 실제 비디오를 받아와 조회수 정보를 추가한 받아오는 코드
   */
  //  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]' \

  const { data: realVideos } = useQuery({
    queryKey: ["realVideos", video.id],
    queryFn: getRealVideos,
  });

  // console.log(realVideos && realVideos);

  const { channelId, description, title } = video.snippet;

  const { data: relatedVideos } = useQuery({
    queryKey: ["related", video.id],
    queryFn: getRelatedVideos,
  });

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  // 새 비디오디테일 페이지로 이동했을때 show state를 초기화한다.
  useEffect(() => {
    setShow(false);
  }, [video]);

  return (
    <div className="flex justify-center ">
      <div className="flex flex-col lg:flex-row max-w-screen-2xl ">
        <section className="basis-9/12 px-2">
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            title={title}
          ></iframe>
          <div>
            <div className="text-xl font-semibold my-4">{title}</div>
            <Channel channelId={channelId} />

            {description && (
              <Description
                description={description}
                show={show}
                handleClick={handleClick}
              />
              // description 말고도 위에 조회수, 시간 입력해
              // 그렇게하면 description이 없어도 조회수, 시간으로 show more 할 수 있다.
              // 참고 동영상 제목 : '새를 본 고양이 울음소리'
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
              {realVideos.items.map((video) => (
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
  console.log(process.env);
  // const key = "AIzaSyAfJbBrbKb1uxENbxnJrrJQLFwKBAfG744";

  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryKey[1]}&type=video&maxResults=25&key=${key}`;
  const { data } = await axios.get(url);
  return data;
};
