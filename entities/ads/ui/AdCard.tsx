// import PublicsEmpty from "@/app/profile/ads/PublicEpty";
// export default function AdsList() {
//   return (
//   <div className="p-2">
//     <h2 className="text-2xl">Мои обьявления</h2>
//     <PublicsEmpty/>
//   </div>
//   )
// }



// entities/ads/ui/AdsEmptyState.tsx
import { Ad } from "../model/types";

export default function AdCard({ ad }: { ad: Ad }) {
  return (
    <div className="border rounded-2xl p-4">
      <h3>{ad.title}</h3>
      <p>{ad.price} сом</p>
    </div>
  );
}