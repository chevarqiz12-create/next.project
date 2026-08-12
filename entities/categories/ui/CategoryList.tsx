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
interface Product {
  id: number;
  num_of_ads: number;
  name: string;
  icon: string;
  image: string;
  color: string;
  order: number;
}
export default function CategoryList() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] =  useState<number | null>(null)

  useEffect(() => {
    async function getCategories() {
      const data = await categoryApi();
      setCategories(data);

    }
    getCategories();
  }, []);

  const handleCategory = async (id: number) => {
    const data = await getCategory(id)
    setProducts(data)
    setSelectedCategory(id)
  }
  return (
    <div className="flex gap-5">
      <div>
        {categories.map(item => (
          <div className={`flex gap-2 cursor-pointer ${selectedCategory === item.id ?"opacity-100 grayscale-0 text-[#1D75DD]":  "opacity-50 grayscale" }`} key={item.id} onClick={() => handleCategory(item.id)}>
            <img src={item.icon} alt="" />
            <p>
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div>
        {products && <div key={products.id}>
          <h2 className="text-[#1D75DD] ">{products.name}</h2>

        </div>}
      </div>
    </div>
  )
}

