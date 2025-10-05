import { BookOpenText, BookText, LayoutDashboard, LogOutIcon, ShoppingCart } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const UserSidebar: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    return (
        <div className="w-full h-screen py-2 bg-gradient-to-tl from-amber-950 to-gray-950 text-white flex flex-col justify-between shadow-[0px_5px_6px] shadow-amber-500/80 rounded-r-lg">
            {/* Logo */}
            <img
                src="/logo.png"
                alt="BookBary"
                className="text-center mx-auto size-12 my-3"
            />

            {/* Menu Items */}
            <ul className="mt-10 flex flex-col gap-y-4 items-center">
                {/* Dashboard */}
                <li className="relative  group my-2 w-full flex-center">
                    <NavLink
                        to="/user/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-500 flex-center"
                                : "text-gray-400 hover:text-amber-500"
                        }
                    >
                        <LayoutDashboard />
                    </NavLink>
                    {/* Tooltip */}
                    <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                        Dashboard
                    </span>
                </li>
                {/* Issued Books */}
                <li className="relative group my-2 w-full flex-center">
                    <NavLink to="/user/issued-books"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-500 flex-center"
                                : "text-gray-400 hover:text-amber-500"
                        }>
                        <BookText />
                    </NavLink>
                    {/* Tooltip */}
                    <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                        Issued Books
                    </span>
                </li>

                {/* Library Books */}
                <li className="relative group my-2 w-full flex-center">
                    <NavLink to="/user/library-books"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-500 flex-center"
                                : "text-gray-400 hover:text-amber-500"
                        }>
                        <BookOpenText />
                    </NavLink>
                    {/* Tooltip */}
                    <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">Library Books</span>
                </li>

                {/* Carts */}
                <li className="relative group my-2 w-full flex-center">
                    <NavLink to="/user/carts"
                        className={({ isActive }) =>
                            isActive
                                ? "text-amber-500 flex-center"
                                : "text-gray-400 hover:text-amber-500"
                        }>
                        <ShoppingCart />
                    </NavLink>
                    {/* Tooltip */}
                    <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                        My Carts
                    </span>
                </li>
            </ul>

            {/* Logout Button - Aligned to Bottom */}
            <button className="relative group my-3 w-full flex-center mt-auto"
                onClick={handleLogout}
            >
                <NavLink to="/login" className="flex-center p-2 rounded-lg hover:text-amber-500">
                    <LogOutIcon />
                </NavLink>
                {/* Tooltip */}
                <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                    Logout
                </span>
            </button>
        </div >
    );
};

export default UserSidebar;
