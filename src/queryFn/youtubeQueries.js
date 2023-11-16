import axios from "axios";

const key = process.env.REACT_APP_YOUTUBE_API_KEY;
const SEARCH_RESULT_COUNT = 20;
const RELATED_VIDEO_COUNT = 11;

export const getSearchVideos = async ({ queryKey }) => {
  const keyword = queryKey[1];
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${SEARCH_RESULT_COUNT}&q=${keyword}&key=${key}`;
  const { data } = await axios.get(url);
  let result = data.items
    .map((item) => {
      item.id = item.id.videoId;
      return item;
    })
    .filter((item) => item.id !== undefined); // id 가 undefined인 것들로 인해 key props 에러가 발생합니다. 이 동영상들은 제외 합니다.

  return result;
};

export const getRelatedVideos = async ({ queryKey }) => {
  const title = queryKey[2];
  // 지금은 사라진 연관동영상리스트 url (혹시 몰라서 남겨둡니다.)
  // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryKey[1]}&type=video&maxResults=10&key=${key}`;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${RELATED_VIDEO_COUNT}&q=${title}&key=${key}`;
  const { data } = await axios.get(url);
  const result = data.items
    .map((item) => ({ ...item, id: item.id.videoId }))
    .filter((item, i) => i !== 0);
  return result;
};

export const getChannel = async ({ queryKey }) => {
  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${queryKey[1]}&key=${key}`;
  const { data } = await axios.get(url);

  return data.items[0];
};
