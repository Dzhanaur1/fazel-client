export const fetchData = async (url) => {
  const response = await fetch(url != "" ? `api/${url}` : "api/catalog");
  if (!response.ok) throw new Error("Не удалось выполнить запрос");
  return response.json();
};
