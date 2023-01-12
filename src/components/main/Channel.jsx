import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function Channel({ channelId }) {
  const { data: channel } = useQuery({
    queryKey: ["channel", channelId],
    queryFn: getChannel,
  });
  return (
    <div className="flex items-center my-2">
      {channel && (
        <>
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={channel.snippet.thumbnails.medium.url}
            alt={channel.snippet.title}
          />
          <div className="font-semibold">{channel.snippet.title}</div>{" "}
        </>
      )}
    </div>
  );
}

const getChannel = async ({ queryKey }) => {
  const url = `/data/channel.json`;

  const { data } = await axios.get(url);
  console.log(data);

  return data.items[0];
};
