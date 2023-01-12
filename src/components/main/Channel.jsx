import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Converter from "../../utils/converter";

export default function Channel({ channelId }) {
  const { data: channel } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: getChannel,
  });
  //   console.log(channel);

  const converter = new Converter();

  channel && converter.numberConverter(channel.statistics.subscriberCount);

  return (
    <div className="flex items-center my-4">
      {channel && (
        <>
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={channel.snippet.thumbnails.medium.url}
            alt={channel.snippet.title}
          />
          <div>
            <div className="font-semibold">{channel.snippet.title}</div>
            <div>{channel.statistics.subscriberCount}</div>
          </div>
        </>
      )}
    </div>
  );
}

const getChannel = async ({ queryKey }) => {
  const url = `/data/channel.json`;

  const { data } = await axios.get(url);

  return data.items[0];
};
