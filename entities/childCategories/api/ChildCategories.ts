import axios from "axios";
export const childCategoryApi = async  () => {
const forChildCategories = await axios.get('https://front-lalafo-students.prolabagency.com/api/v1/child-categories/')
return forChildCategories.data
}