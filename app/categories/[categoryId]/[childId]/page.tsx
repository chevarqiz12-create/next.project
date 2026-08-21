"use client"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { childCategoryByIdApi } from "@/entities/childCategories/api/ChildCategories";
export default function CategoryDetailPage() {
  const { categoryId, childId } = useParams<{ categoryId: string; childId: string }>();
  const [category, setCategory] = useState<Child | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function load() {
      setLoaded(false);
      const categoryDetail = await childCategoryByIdApi(childId);
      setCategory(categoryDetail);
      setLoaded(true);
    }
    load();
  }, [childId]);
  if (!loaded) {
    return <p className="py-10 text-center">Загрузка...</p>;
  }
  return (
    <div className="py-10 px-10">
      <h1 className="text-2xl font-bold mb-4">{category?.name}</h1>
      {/* здесь дальше подключим список объявлений (ads) по этой категории */}
    </div>
  );
} 