import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://front-lalafo-students.prolabagency.com/api/v1",
});

export interface Category {
    id: number;
    name: string;
    icon: string;
    image: string;
    color: string;
    order: number;
    parentId: number | null;
}

export const categoryApi = async (): Promise<Category[]> => {
    try {
        const response = await apiClient.get<Category[]>("/categories/");
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении категорий:", error);
        throw error;
    }
};

export const getCategory = async (id: number): Promise<Category> => {
    try {
        const response = await apiClient.get<Category>(`/categories/${id}/`);
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении категории с id=${id}:`, error);
        throw error;
    }
};