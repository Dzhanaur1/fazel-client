import React from "react";
import data from "./categories.json";
import Link from "next/link";

const CategoriesList = () => {
  const categories = data.categories || [];
  console.log(data);
  return (
    <ul>
      {categories.map((category) => (
        <li>
          <Link href={"category/" + category.id}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
