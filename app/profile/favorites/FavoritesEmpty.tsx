import Image from "next/image"
import emptyFavorite from "@/app/profile/assets/emptyFavorite.svg"
export default function FavoritesEmpty() {
  return (
    <div className="flex flex-col  justify-center items-center gap-2">
      <Image src={emptyFavorite} alt="emptyFavorite" />
      <h2 className="font-bold text-2xl">Ваш список желаний пуст</h2>
      <p className="text-gray-500">Сердце ждет, когда вы выберете что-нибудь особенное!</p>
      <button className="bg-[#1D75DD] py-3 px-15 rounded-2xl text-white">Перейти в каталог</button>
    </div>
  )
}