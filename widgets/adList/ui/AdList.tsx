"use client"
import { useEffect, useState } from "react";
import { adsApi } from "@/entities/ads/api/adsApi";
import  AdCard  from "@/entities/ads/ui/AdCard";
import { Ad } from "@/entities/ads/model/types";

export function AdsList() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    async function getAds() {
      try {
        const data = await adsApi();
        setAds(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAds();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {ads.map((ad) => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
}