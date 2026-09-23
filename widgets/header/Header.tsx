import CategoryButton from "@/features/categoryButton/ui/CategoryButton"
import logo2 from "@/features/categoryButton/assets/logo2.svg"
import ProfileButton from "@/features/ProfileButton/ProfileButton";
import Image from "next/image";
import Link from "next/link";



const Header = () => {
    return (
        <header className=" flex justify-between items-center bg-white p-5">
            <Link href="/">
                <Image
                    src={logo2}
                    alt="logo"
                    className="mt-1 cursor-pointer"
                />
            </Link>

            <CategoryButton />
            <ProfileButton />
        </header>
    )
}
export { Header }