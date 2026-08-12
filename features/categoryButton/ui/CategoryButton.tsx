"use client"
import Image from "next/image";
import logo from "@/features/categoryButton/assets/logo.svg"
import arrow from "@/features/categoryButton/assets/arrow.svg"
import CategoryList from "@/entities/categories/ui/CategoryList";
import { useState } from "react";
export default function CategoryButton() {
    const [showCategory, setShowCategory] = useState(false)

    const handleClick = () => {
        showCategory === true ?
            setShowCategory(false)
            : setShowCategory(true)
    };

    return (
        <div>
            <div className="bg-[#1D75DD] text-white p-3 w-fit  rounded-md flex items-center justify-center  gap-2">
                <Image src={logo} alt="logo " /> Все категории
                <Image src={arrow} alt="arrow" className="mt-1 cursor-pointer" onClick={() => handleClick()}/>
                </div>
            <div className="inset-0 fixed top-20 bg-white h-fit">
                {showCategory && <CategoryList />}
            </div>
        </div>
    )
}
