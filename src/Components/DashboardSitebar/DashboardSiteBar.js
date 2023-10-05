import NavLink from "../Navbar/NavLink";

const asideLinks = [
    { path: "/", title: "Home" },
    { path: "/dashboard", title: "Dashboard" },
    { path: "/dashboard/add-product", title: "Add Product" },
    { path: "/dashboard/manage-product", title: "Manage Product" },
    { path: "/dashboard/all-products", title: "All Products" }

]
const DashboardSiteBar = () => {
    return (
        <aside className="mr-10 space-y-20">
            <h1 className='text-3xl font-bold text-[#727171]'>Dashboard</h1>
            <ul>
                {
                    asideLinks.map(({ title, path }) => <li className="font-medium py-2 text-blue-500" key={path}><NavLink exact activeClassName="underline" className="hover:underline" href={path}>{title}</NavLink></li>)
                }
            </ul>
        </aside>
    );
};

export default DashboardSiteBar;