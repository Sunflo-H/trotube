import React, { useState } from "react";
import Category from "../components/main/category/Category";
import Top7 from "../components/main/Top7";
import Videos from "../components/main/Videos";

export default function Main() {
  const [category, setCategory] = useState(categoryList[0].title);

  return (
    <div className="relative w-full h-full  ">
      {/* 카테고리가 바뀌었을때 페이지 변경은 아니야 */}
      {/* <Category category={category} setCategory={setCategory} /> */}

      {/* 카테고리에 따라서 아이템을 보여줄거야 */}
      {category === categoryList[0].title ? (
        <Top7 />
      ) : (
        <Videos category={category} />
      )}
    </div>
  );
}

const categoryList = [
  { title: "Top 7" },
  { title: "결승" },
  { title: "준결승" },
  { title: "본선" },
];
