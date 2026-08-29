"use client"
import { useState, useEffect } from "react"
import { userApi } from "../api/usersApi"
import Image from "next/image"
import man2 from "@/features/ProfileButton/assets/man2.svg"
import google from "@/entities/users/ui/assets/google.svg"
import pen from "@/entities/users/ui/assets/pen.svg"
interface User {
    id: number;
    phone_number: string;
    email: string;
    full_name: string;
    avatar: string | null;
    whatsapp_number: string;
    telegram_number: string | null;
    phone_number_verified: boolean;
    email_confirmed: boolean;
}
export default function UserProfile() {
    const [user, setUser] = useState<User | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState("");
    useEffect(() => {
        async function getUser() {
            const data = await userApi()
            setUser(data)
        }
        getUser()
    }, [])
    return (
        <div className="flex justify-between">
            <div className="border border-gray-500 border-2 rounded-4xl p-2 w-fit h-fit">
                <Image src={man2} alt="for mark" width={40} className="border rounded-4xl" />
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <span>ФИО</span>
                    <div className="relative">
                        <input
                            type="text"
                            value={user?.full_name ?? ""}
                            onChange={(e) => setName(e.target.value)}
                            readOnly={!isEditing}
                            className=" bg-gray-200 py-5 px-20 rounded-2xl border border-transparent focus:border-blue-500 transition-all duration-200 focus:outline-none" />
                        {isEditing && <Image src={pen} alt="ruchka" className=" pointer-events-none   absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5" />}
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <span>Телеграм</span>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="@example"
                            readOnly={!isEditing}
                            className="bg-gray-200 py-5 px-10 rounded-2xl  border border-transparent focus:border-blue-500 transition-all duration-200 focus:outline-none" />
                        {isEditing && <Image src={pen} alt="ruchka" className=" pointer-events-none   absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5" />}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <span>Пароль</span>
                    <div className="relative">
                        <input
                            type="password"
                            readOnly={!isEditing}
                            placeholder='parool'
                            className="bg-gray-200 py-5 px-10 rounded-2xl  border border-transparent focus:border-blue-500 transition-all duration-200 focus:outline-none" />
                        {isEditing && <Image src={pen} alt="ruchka" className=" pointer-events-none   absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5" />}
                    </div>
                </div>
                <button className="border border-[#1D75DD] p-5 rounded-2xl text-[#1D75DD] hover:text-white hover:bg-[#1D75DD] transition duration-300">Публичный профиль</button>
            </div>
            <div className="flex flex-col gap-3 justify-between h-97 ">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-5">
                        <span>Номер телефона</span>

                        <div className="relative">
                            <input
                                type="text"
                                value="+996"
                                readOnly={!isEditing}
                                className="w-full bg-gray-200 py-5 px-10 pr-14 rounded-2xl border border-transparent focus:border-blue-500 transition-all duration-200 focus:outline-none"
                            />

                            {isEditing && (
                                <Image
                                    src={pen}
                                    alt="ruchka"
                                    width={20}
                                    height={20}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <span>WhatsApp номер</span>


                        <div className="relative">
                            <input
                                type="text"
                                value="+996"
                                readOnly={!isEditing}
                                className="w-full bg-gray-200 py-5 px-10 pr-14 rounded-2xl border border-transparent focus:border-blue-500 transition-all duration-200 focus:outline-none"
                            />

                            {isEditing && (
                                <Image
                                    src={pen}
                                    alt="ruchka"
                                    width={20}
                                    height={20}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex gap-7">
                    <Image src={google} alt="google" />
                    <button onClick={() => setIsEditing(!isEditing)} className="bg-[#1D75DD] p-3 text-white rounded-2xl w-27">{isEditing ? "Сохранить" : "Изменить"}</button>
                    <button className="p-3 border border-red-500 rounded-2xl text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ">Удалить аккаунт</button>
                </div>
            </div>
        </div>
    )
}
