import Link from "next/link"
import Image from "next/image"
import man2 from "@/features/ProfileButton/assets/man2.svg"
export default function ProfileButton() {
  return (
  <div className="border border-gray-500 border-2 rounded-4xl p-2">
    <Link href="/profile"><Image src={man2} alt="photo" width={40} /></Link>
  </div>
  )
}
