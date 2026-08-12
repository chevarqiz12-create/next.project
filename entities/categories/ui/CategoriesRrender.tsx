"use client";
import { useEffect, useState } from "react";
import { categoryApi, getCategory } from "../api/categoryApi";

interface Category {
    id: number;
    num_of_ads: number;
    name: string;
    icon: string;
    image: string;
    color: string;
    order: number;
}
export default function CategoriesRender() {
     const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function getCategories() {
            const data = await categoryApi();
            setCategories(data);

        }
        getCategories();
    }, []);
    return (
        <div>

        </div>
    )
}