import React from "react";
import data from "../categories.json";
import Link from "next/link";
const Category = ({ params: { category_id } }) => {
  const [category] = data.categories.filter((obj) => obj.id === category_id);
  console.log(category.subcategories);

  return (
    <ul>
      {category.subcategories.map((subCategory) => (
        <li>
          <Link href={category_id + "/" + subCategory.id}>
            {subCategory.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Category;
