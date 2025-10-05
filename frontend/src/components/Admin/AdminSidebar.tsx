import { BarChart3, BookOpenText, LayoutDashboard, LibraryBig, LogOutIcon, PlusSquare, Users } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const AdminSidebar: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    return (
        <div className="w-full  h-screen py-2 bg-gradient-to-tl from-amber-950 to-gray-950 text-white flex flex-col justify-between shadow-[0px_5px_6px] shadow-amber-500/80 rounded-r-lg">
            {/* Logo */}
            <img
                src="/logo.png"
                alt="BookBary"
                className="text-center mx-auto size-12 my-3"
            />

            {/* Menu Items */}
            <nav className='flex flex-col gap-4 text-sm'>
                <ul className="mt-10 flex flex-col gap-y-4 items-center">
                    {/* Dashboard */}
                    <li className="relative  group my-2 w-full flex-center">
                        <NavLink
                            to="/admin/dashboard"
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
                    {/* manage-books */}
                    <li className="relative  group my-2 w-full flex-center">

                        <NavLink to="/admin/manage-books"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 flex-center"
                                    : "text-gray-400 hover:text-amber-500"
                            }>
                            <LibraryBig size={20} />
                        </NavLink>
                        <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                            Manage Books
                        </span>
                    </li>

                    {/* Manage Users */}
                    <li className="relative  group my-2 w-full flex-center">

                        <NavLink to="/admin/manage-users"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 flex-center"
                                    : "text-gray-400 hover:text-amber-500"
                            }>
                            <Users size={20} />
                        </NavLink>
                        <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                            Manage Users
                        </span>
                    </li>
                    {/* Add Book */}
                    <li className="relative  group my-2 w-full flex-center">

                        <NavLink to="/admin/add-book"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 flex-center"
                                    : "text-gray-400 hover:text-amber-500"
                            }>
                            <PlusSquare size={20} />
                        </NavLink>
                        <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                            Add Book
                        </span>
                    </li>
                    {/* Analytics */}
                    <li className="relative  group my-2 w-full flex-center">

                        <NavLink to="/admin/analytics"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 flex-center"
                                    : "text-gray-400 hover:text-amber-500"
                            }>
                            <BarChart3 size={20} />
                        </NavLink>
                        <span className="absolute text-xs p-1 left-full opacity-0 group-hover:opacity-100 group-hover:delay-500 transition-all duration-300 ease-in-out z-50 rounded-md text-white bg-gray-700">
                            Analytics
                        </span>
                    </li>

                    {/* Library Books */}
                    <li className="relative group my-2 w-full flex-center">
                        <NavLink to="/admin/library-books"
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
                </ul>
            </nav>
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

export default AdminSidebar;
