import React, { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../features/auth/authSlice";
import { capitalizeWords } from "../utils/helper";
import toast from "react-hot-toast";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate('/login');

  };

  const [dropdown, setDropdown] = useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  // console.log()
  return (
    <nav className="bg-white z-20 border-gray-200 dark:bg-gray-900 fixed right-0 left-0 top-0 rounded-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        {/* Logo icon */}
        <NavLink
          to="https://rajendrapancholi.blogspot.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" alt="LMS" className="bg-cover w-9" />
          <span className="self-center text-3xl font-extrabold whitespace-nowrap bg-gradient-to-r bg-clip-text text-transparent from-amber-700 via-amber-600 to-amber-500">
            {/* Rajendra */}
            BookBary
          </span>
        </NavLink>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
          <div className="flex justify-center items-center gap-3 mr-4">
            {user ?
              <button
                onClick={handleLogout}
                className="text-white font-medium rounded-lg text-sm px-4 py-1.5 text-center bg-gradient-btn-logout active:scale-95 cursor-pointer">
                <NavLink
                  to="login"
                  className="font-bold"
                >
                  Logout
                </NavLink>
              </button> :
              <button className="text-white font-medium rounded-lg text-sm px-4 py-1.5 text-center bg-gradient-btn active:scale-95 cursor-pointer">
                <NavLink
                  to="login"
                  className="font-bold"
                >
                  Login
                </NavLink>
              </button>
            }
            <span className="dark:text-white flex justify-center items-center">
              <ToggleTheme />
            </span>
          </div>

          <button
            type="button"
            className="cursor-pointer flex text-sm dark:text-white bg-gray-800 rounded-full md:me-0 ring-2 transition-all active:scale-95"
            onClick={toggleDropdown}
          >
            {!user ? <NavLink to="login"> <User size={30} /> </NavLink> :
              <div className="w-8 h-8 bg-blue-500 text-xl font-semibold text-white flex items-center justify-center rounded-full">
                {user.name.charAt(0).toUpperCase()}
              </div>
            }
          </button>
          {user &&
            <div
              className={` ${dropdown ? "block" : "hidden"} absolute top-12 right-1 z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 `}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {capitalizeWords(user.name)}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <NavLink
                    to="dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="earnings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="sign-out"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </NavLink>
                </li>
              </ul>
            </div>
          }
        </div>

        {dropdown && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setDropdown(false)}
          />
        )}


        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {/* <NavLink to="/" className="navItems"> */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "dark:text-amber-50 border-b-2 border- border-b-amber-300"
                    : "navItems"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "dark:text-amber-50 border-b-2 border- border-b-amber-300"
                    : "navItems"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className={({ isActive }) =>
                  isActive
                    ? "dark:text-amber-50 border-b-2 border- border-b-amber-300"
                    : "navItems"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive
                    ? "dark:text-amber-50 border-b-2 border- border-b-amber-300"
                    : "navItems"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
