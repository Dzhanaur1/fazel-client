import axios from "axios";
import pickBy from "lodash.pickby";
// const { data } = await axios.get(`http://localhost:3000/api/catalog`);
// if (!data.ok) throw new Error("Не удалось выполнить запрос");

// return data.json();

export const getAllProducts = async (category, order) => {
  const { data } = await axios.get("http://localhost:3000/api/catalog", {
    params: pickBy({
      category,
      order,
    }),
  });

  return data;
};

export const getProductByID = async (id) => {
  const response = await fetch(
    `https://fazel-server.vercel.app/api/product/${id}`
  );
  if (!response.ok) throw new Error("Не удалось выполнить запрос");

  return response.json();
};
