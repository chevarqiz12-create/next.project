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

  return { handleCategory, selectedCategory };
}