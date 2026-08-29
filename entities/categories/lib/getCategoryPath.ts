// entities/categories/lib/getCategoryPath.ts
import {Category} from "../model/typs"





export function getCategoryPath(category: Category, categories: Category[]): Category[] {
  const path: Category[] = [];
  let current: Category | undefined = category;
  while (current) {
    path.unshift(current);
    current = categories.find((c) => c.id === current!.parentId);
  }
  return path;
}