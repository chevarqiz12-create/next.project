"use client"
import { categoryApi } from "../api/categoryApi"
import { useState, useEffect } from "react";
export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            const data = await categoryApi();
            setCategories(data);
        }

        getCategories();
    }, []);
    return (
        <div>
           {categories.map(item=>(
            <p key={item.id}>{item.name}</p>
           ))}

          
        </div>
    )
}
