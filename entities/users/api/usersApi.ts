// entities/users/api/usersApi.ts
import axios from "axios";

export const userApi = async () => {
  const token = localStorage.getItem("token");
  console.log("TOKEEN:", token);
  
  const forUserApi = await axios.get(
    'https://front-lalafo-students.prolabagency.com/api/v1/auth/profile/',
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return forUserApi.data;
};


export const deleteUser = async (token: string) => {
  try {
    const forDelete = await axios.delete(
      'https://front-lalafo-students.prolabagency.com/api/v1/auth/profile/',
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    return forDelete.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }
    throw error;
  }
};