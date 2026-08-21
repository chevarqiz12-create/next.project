"use client";
import { useEffect, useState } from "react";
import { categoryApi, getCategory } from "../api/categoryApi";
import Categories from "@/features/categories/Categories";
import Child from "@/entities/childCategories/ui/ChildCategoryList";
export default function CategoriesRender() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { handleCategory, selectedCategory } = Categories();

  useEffect(() => {
    async function getCategories() {
      const data = await categoryApi();
      setCategories(data);
    }
    getCategories();  /// 
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${selectedCategory === String(category.id) ? "bg-[#1D75DD] text-white" : "bg-gray-200"} cursor-pointer py-2 px-3 flex justify-between rounded-2xl`}
            onClick={() => handleCategory(category.id)}
          >
            <img src={category.icon} alt="" className="w-5" />
            <p>{category.name}</p>
          </div>
        ))}
      </div> 
      <Child />
    </div>
  );
}
