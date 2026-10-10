import { NavLink } from "react-router-dom"
import { Container } from "../Container/Container"
import { FaRegUserCircle } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";

export const Header = () => {
    return (
        <header>
            <Container className=" flex flex-row justify-between items-center py-5 px-10 bg-[#131625] ">
                {/* <h1 className="text-white uppercase font-bold text-xl">cinema<span className=" text-[#6366F1]">.ai</span></h1> */}
                <nav className="flex gap-6">
                    <NavLink className={({ isActive }) =>
                        `${isActive ? "text-[#6366F1]" : "text-[#FFFFFF]"} text-sm font-medium`
                    } to="/">Головна</NavLink>
                    <NavLink className={({ isActive }) =>
                        `${isActive ? "text-[#6366F1]" : "text-[#FFFFFF]"} text-sm font-medium`
                    } to="/movies">Популярні</NavLink>
                    {/* <NavLink className={({ isActive }) =>
                        `${isActive ? "text-[#6366F1]" : "text-[#FFFFFF]"} text-sm font-medium`
                    } to="*">Категорії</NavLink>
                    <NavLink className={({ isActive }) =>
                        `${isActive ? "text-[#6366F1]" : "text-[#FFFFFF]"} text-sm font-medium`
                    } to="*">ШІ-подбір</NavLink> */}
                </nav>
                {/* <div>
                    <button type="button">
                        UA ▾
                    </button>
                    <button type="button">
                        <FaRegUserCircle size={28} color="#FFFFFF" />
                    </button>
                </div> */}
            </Container>
        </header>
    )
}