import axios from "axios";
import { Ad } from "@/entities/ads/model/types";

interface CreateAdRequest {
  title: string;
  price: number;
  description: string;
  category: number;
  images: File[];
}

export const createAdApi = async (data: CreateAdRequest, token: string) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", String(data.price));
    formData.append("description", data.description);
    formData.append("category", String(data.category));
    data.images.forEach((img) => formData.append("images", img));

    const response = await axios.post<Ad>(
      "https://front-lalafo-students.prolabagency.com/api/v1/ads/",
      formData,
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
    }
    throw error;
  }
};