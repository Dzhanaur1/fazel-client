import { NextResponse } from "next/server";
import data from "./data.json";
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("category");

  let currentProducts = data.products;
  let categories = data.categories;
  let subCategories = data.subСategories;
  if (query) {
    let category = data.categories.find((category) => category.query == query);
    currentProducts = data.products.filter(
      (product) => product.category === category?.id
    );
  }
  const response = { categories, subCategories, currentProducts };
  return NextResponse.json(response);
}
