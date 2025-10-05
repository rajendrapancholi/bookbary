import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; {new Date().getFullYear()} {" "}
        <NavLink
          to="https://rajendrapancholi.vercel.app/"
          className="hover:underline"
        >
          Rajendra Pancholi™
        </NavLink>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <NavLink to="about" className="hover:underline me-4 md:me-6">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="privacy" className="hover:underline me-4 md:me-6">
            Privacy Policy
          </NavLink>
        </li>
        <li>
          <NavLink to="licensing" className="hover:underline me-4 md:me-6">
            Licensing
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className="hover:underline">
            Contact
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
