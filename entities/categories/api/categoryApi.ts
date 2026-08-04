import axios from "axios";
export const categoryApi  = async () => {
   const ForAxios=  await  axios.get('https://front-lalafo-students.prolabagency.com/api/v1/categories/')
    return ForAxios.data
   


}