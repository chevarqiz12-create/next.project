// shared/ui/Breadcrumbs/Breadcrumbs.tsx
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string; // если нет href — это текущая страница (последний пункт)
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav>
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {i < items.length - 1 && <span> {i === 0 ? "·" : ">"} </span>}
        </span>
      ))}
    </nav>
  );
}