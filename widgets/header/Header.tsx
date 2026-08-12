import CategoryButton from "@/features/categoryButton/ui/CategoryButton"
import logo2 from "@/features/categoryButton/assets/logo2.svg"
import ProfileButton from "@/features/ProfileButton/ProfileButton";
import Image from "next/image";


const Header = () => {
    return (
        <header className=" flex justify-between items-center bg-white p-5">
            <Image src={logo2} alt="logo" className="mt-1 cursor-pointer" />
           
            <CategoryButton />
            <ProfileButton/>
        </header>
    )
}
export { Header }