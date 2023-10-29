import { useRouter } from "next/router";

export const serCurrentURL = (filter, sort) => {
  return `catalog?category=${filter}&sortBy=${sort}`;
};
