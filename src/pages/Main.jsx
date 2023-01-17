import React from "react";

import Top7 from "../components/main/Top7";
import Videos from "../components/main/Videos";
import VideosByRound from "../components/main/VideosByRound";

export default function Main() {
  // const [category, setCategory] = useState(categoryList[0].title);
  const roundList = [
    `결승전`,
    `준결승전`,
    `본선1차전`,
    `본선2차전`,
    `본선3차전`,
  ];
  return (
    <div className="relative w-full h-full px-4">
      {/* 카테고리가 바뀌었을때 페이지 변경은 아니야 */}
      {/* <Category category={category} setCategory={setCategory} /> */}
      {/* 카테고리에 따라서 아이템을 보여줄거야 */}
      {/* {category === categoryList[0].title ? (
        <Top7 />
      ) : (
        <Videos category={category} />
      )} */}
      <Top7 />

      {roundList.map((round, index) => (
        <VideosByRound round={round} key={index} />
      ))}
    </div>
  );
}

// const categoryList = [
//   { title: "Top 7" },
//   { title: "결승" },
//   { title: "준결승" },
//   { title: "본선" },
// ];
