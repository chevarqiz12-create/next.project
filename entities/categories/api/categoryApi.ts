import axios from "axios";
export const categoryApi = async () => {
    const ForAxios = await axios.get('https://front-lalafo-students.prolabagency.com/api/v1/categories/')
    return ForAxios.data



}


export const getCategory = async (id: number) => {
    const forCategoriesId = await axios.get(`https://front-lalafo-students.prolabagency.com/api/v1/categories/${id}/`)
    return forCategoriesId.data
}
