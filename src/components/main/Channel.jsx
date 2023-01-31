import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Converter from "../../utils/converter";

export default function Channel({ channelId }) {
  const { data: channel } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: getChannel,
  });

  const converter = new Converter();

  channel && converter.numberConverter(channel.statistics.subscriberCount);

  return (
    <div className="flex items-center my-4 px-2">
      {channel && (
        <>
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={channel.snippet.thumbnails.medium.url}
            alt={channel.snippet.title}
          />
          <div>
            <div className="font-semibold">{channel.snippet.title}</div>
            {/* <div>{channel.statistics.subscriberCount}</div> */}
          </div>
        </>
      )}
    </div>
  );
}

const getChannel = async ({ queryKey }) => {
  const key = process.env.REACT_APP_YOUTUBE_API_KEY;
  // const url = `/data/channel.json`;
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${queryKey[1]}&key=${key}`;

  const { data } = await axios.get(url);

  return data.items[0];
};
