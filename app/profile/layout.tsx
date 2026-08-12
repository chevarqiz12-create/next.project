"use client"
import Image from "next/image";
import profileLogo from "@/app/profile/assets/profileLogo.svg"
import bag from "@/app/profile/assets/bag.svg"
import heart from "@/app/profile/assets/heart.svg"
import leave from "@/app/profile/assets/leave.svg"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname()
  
  return (
    <div className="flex gap-2 p-6 ">
      <aside className="p-5 bg-white rounded-2xl flex flex-col justify-between h-[550px] w-100 ">
        <div className="flex flex-col gap-2">
          <Link href="/profile"><div className={`${path === '/profile' ? 'active' : 'grayscale'}  flex gap-2 bg-amber-50 p-3 rounded-2xl`}><Image src={profileLogo} alt="profileLogo" />Профиль</div></Link>
          <Link href="/profile/ads"><div className={`${path === '/profile/ads' ? 'active' : 'grayscale'}  flex gap-2 bg-amber-50 p-3 rounded-2xl`}><Image src={bag} alt="bag" />Мои обьявления</div></Link>
          <Link href="/profile/favorites"><div className={`${path === '/profile/favorites' ? 'active' : 'grayscale'}  flex gap-2 bg-amber-50 p-3 rounded-2xl`}><Image src={heart} alt="heart" />Мои избранные</div></Link>
        </div>
        <button className="flex gap-2 text-red-500"><Image src={leave} alt="leave" /> Выйти из аккаунта</button>
      </aside>
      <main className=" h-full w-full rounded-2xl">{children}</main>
    </div>
  )
}
