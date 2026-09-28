import { AdsList } from "@/widgets/adList/ui/AdList";

export default function AdsPage() {
  return (
    <div className="p-2">
      <h2 className="text-2xl">Мои объявления</h2>
      <AdsList />
    </div>
  );
}