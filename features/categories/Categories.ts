"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Categories() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("categoryId");

  function handleCategory(id: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("categoryId", String(id));
    router.push(`?${params.toString()}`, { scroll: false });
  }

  function clearCategory() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("categoryId");
    const query = params.toString();
    router.push(query ? `?${query}` : "/", { scroll: false });
  }

  return { handleCategory, selectedCategory, clearCategory };
}