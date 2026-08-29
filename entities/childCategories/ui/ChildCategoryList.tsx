"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { childCategoryApi } from "../api/ChildCategories";
import Image from "next/image";

export default function Child() {
  const [childs, setChilds] = useState<Child[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  useEffect(() => {
    async function getChilds() {
      const data = await childCategoryApi();
      setChilds(data);
    }
    getChilds();
  }, []);

  const child = categoryId
    ? childs.filter((item) => Number(item.parent) === Number(categoryId))
    : childs;

const handleChildClick = (childItem: Child) => {
  // если есть categoryId в URL (отфильтрованный вид) — берём его,
  // если нет (главная страница, показаны все) — берём parent у самого элемента
  const parentId = categoryId ?? childItem.parent;
  router.push(`/categories/${parentId}/${childItem.id}`);

};

  if (categoryId && child.length === 0) {
    // return (
    //   <div className="flex flex-col items-center justify-center py-10 text-center">
    //     <p className="text-lg font-semibold">Ничего не нашлось</p>
    //     <p className="text-gray-400">Пусто</p>
    //   </div>
    // );
  }

  return (
    <div className="flex flex-wrap gap-5 py-5">
      {child.map((item) => (
        <div
          key={item.id}
          onClick={() => handleChildClick(item)}
          className="flex justify-between bg-gray-100 rounded-md p-2 gap-2 cursor-pointer hover:bg-gray-200 transition"
        >
          <h5>{item.name}</h5>
          <Image src={item?.image} alt="child" height={30} width={30} />
        </div>
      ))}
    </div>
  );
}