import axios from "axios";
import pickBy from "lodash.pickby";
// const { data } = await axios.get(`http://localhost:3000/api/catalog`);
// if (!data.ok) throw new Error("Не удалось выполнить запрос");

// return data.json();

export const getAllProducts = async (category, order) => {
  const { data } = await axios.get(
    `https://fazel-server.vercel.app/api/catalog`,
    {
      params: pickBy({
        category,
        order,
      }),
    }
  );
  // localStorage.setItem("allProducts", JSON.stringify(data));
  return data;
};

export const getProductByID = async (id) => {
  const { data } = await axios.get(
    `https://fazel-server.vercel.app/api/product/${id}`
  );

  return data;
};
