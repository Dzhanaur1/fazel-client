export const getAllProducts = async (query) => {
  const response = await fetch(`https://fazel-server.vercel.app/api/${query}`);
  if (!response.ok) throw new Error("Не удалось выполнить запрос");

  return response.json();
};
export const getProductByID = async (id) => {
  const response = await fetch(
    `https://fazel-server.vercel.app/api/product/${id}`
  );
  if (!response.ok) throw new Error("Не удалось выполнить запрос");

  return response.json();
};
