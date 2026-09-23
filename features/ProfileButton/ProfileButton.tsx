"use client"
import Image from "next/image"
import man2 from "@/features/ProfileButton/assets/man2.svg"
import { useAuthModal } from "@/app/shared/providers/AuthModalProvider"

export default function ProfileButton() {
  const { openModal, token } = useAuthModal();

  const handleClick = () => {
    if (!token) {
      openModal();
    } else {
      window.location.href = "/profile";
    }
  };

  return (
    <div className="border border-gray-500 border-2 rounded-4xl p-2">
      <Image
        src={man2}
        alt="profile"
        width={40}
        onClick={handleClick}
        className="cursor-pointer"
      />
    </div>
  );
}