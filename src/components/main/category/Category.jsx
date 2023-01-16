import React, { useEffect, useState } from "react";
import CategoryFilterItem from "./CategoryFilterItem";

export default function Category({ category, setCategory }) {
  const [categories, setCategories] = useState(categoryList);

  return (
    <ul className="flex mb-4 w-full">
      {categories.map((item, index) => (
        <CategoryFilterItem
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
