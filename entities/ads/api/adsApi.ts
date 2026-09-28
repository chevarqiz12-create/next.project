import axios from "axios";
import { Ad } from "../model/types";

export const adsApi = async (): Promise<Ad[]> => {
  try {
    const response = await axios.get<Ad[]>(
      "https://front-lalafo-students.prolabagency.com/api/v1/ads/"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};