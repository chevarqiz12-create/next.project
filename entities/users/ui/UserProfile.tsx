"use client"
import { userApi } from "../api/usersApi"
import { useEffect, useState } from "react"

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

export default function UsersProfile() {
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        async function getUser() {
            const data = await userApi()
            setUser(data)
        }
        getUser()
    }, [])
    return (
        <div>
            <input type="text" placeholder={user?.full_name} />
        </div>
    )

}