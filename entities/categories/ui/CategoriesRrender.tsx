"use client";
import { useEffect, useState } from "react";
import { categoryApi } from "../api/categoryApi";
import Categories from "@/features/categories/Categories";
import Child from "@/entities/childCategories/ui/ChildCategoryList";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs/Breadcrumbs";
import { Category } from "@/entities/categories/model/types";

export default function CategoriesRender() {
  const [categories, setCategories] = useState<Category[]>([]);
  const { handleCategory, selectedCategory, clearCategory } = Categories();

  useEffect(() => {
    async function getCategories() {
      const data = await categoryApi();
      setCategories(data);
    }
    getCategories();
  }, []);

  const displayedCategories = selectedCategory
    ? categories.filter((c) => String(c.id) === selectedCategory)
    : categories;

  // находим выбранную категорию, чтобы взять её name для крошек
  const activeCategory = categories.find(
    (c) => String(c.id) === selectedCategory
  );

  const breadcrumbItems = [
    { label: "На главную", href: "/" },
    { label: "Все категории", href: "/" },
    ...(activeCategory ? [{ label: activeCategory.name }] : []),
  ];

  return (
    <div className="flex flex-col">
      {selectedCategory && <Breadcrumbs items={breadcrumbItems} />}

      <div className="flex items-center gap-3">
       

        <div className="flex justify-between gap-23">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className={`${
                selectedCategory === String(category.id)
                  ? "bg-[#1D75DD] text-white"
                  : "bg-gray-200"
              } cursor-pointer py-2 px-3 flex items-center gap-2 rounded-2xl`}
              onClick={() => handleCategory(category.id)}
            >
              <img src={category.icon} alt="" className="w-5" />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Child />
    </div>
  );
}
