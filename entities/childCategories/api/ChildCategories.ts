import axios from "axios";

const BASE_URL = "https://front-lalafo-students.prolabagency.com/api/v1/child-categories/";

// список всех дочерних категорий (для меню "Все категории")
export const childCategoryApi = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

// одна дочерняя категория по её id (для страницы конкретной категории)
export const childCategoryByIdApi = async (id: string | number) => {
  const { data } = await axios.get(`${BASE_URL}${id}/`);
  return data;
};