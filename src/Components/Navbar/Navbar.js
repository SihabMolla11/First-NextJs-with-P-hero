import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contract", title: "Contract" },
    { path: "/blogs", title: "blogs" },
    { path: "/dashboard", title: "Dashboard" },
    { path: "/products", title: "Products" },
]


const Navbar = () => {
    return (
        <nav className="flex item-center justify-between container mx-auto">
            <h2 className="text-3xl font-semibold text-[#505050]">First Next Js</h2>
            <ul className="flex items-center gap-5 font-medium text-blue-500 ">
                {navLinks.map(({ path, title }) => <li className="hover:underline" key={path}>
                    <NavLink exact={path === "/"} activeClassName="underline" href={path}>{title}</NavLink>
                </li>)}
            </ul>
        </nav>
    );
};

export default Navbar;