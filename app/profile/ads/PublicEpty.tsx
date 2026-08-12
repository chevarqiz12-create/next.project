import Image from "next/image"
import emptyPublic from "@/app/profile/assets/emptyPublic.svg"
export default function PublicsEmpty() {
  return (
    <div className=" flex flex-col  justify-center items-center gap-2">
      <Image src={emptyPublic} alt="emptyPublic" />
      <h2 className="font-bold text-2xl">У вас еще нет активных объявлений</h2>
      <p className="text-gray-500">Пора что-нибудь продать!</p>
    </div>
  )
}