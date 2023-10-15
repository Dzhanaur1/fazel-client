export const getAllProducts = async (query) => {
  const response = await fetch(
    `http://localhost:3000/api/${query}`
    // fetchURL != null ? `api/${fetchURL}` : "api/catalog"
  );
  if (!response.ok) throw new Error("Не удалось выполнить запрос");

  return response.json();
};
export const getProductByID = async (id) => {
  const response = await fetch(`http://localhost:3000/api/product/${id}`);
  if (!response.ok) throw new Error("Не удалось выполнить запрос");

  return response.json();
};
