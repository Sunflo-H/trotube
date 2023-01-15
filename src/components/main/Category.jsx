import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

export default function Category() {
  const [categories, setCategories] = useState(categoryList);
  const [category, setCategory] = useState(categoryList[0].title);

  return (
    <ul className="flex mb-4 w-full">
      {categories.map((item, index) => (
        <CategoryItem
          key={index}
          title={item.title}
          category={category}
          setCategory={setCategory}
        />
      ))}
    </ul>
  );
}

const categoryList = [
  { title: "Top 7" },
  { title: "결승" },
  { title: "준결승" },
  { title: "본선" },
];
