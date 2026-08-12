import axios from "axios";
export const userApi = async ()=>{
  const forUserApi = await axios.get('https://front-lalafo-students.prolabagency.com/api/v1/auth/users/80')
  return forUserApi.data
}
