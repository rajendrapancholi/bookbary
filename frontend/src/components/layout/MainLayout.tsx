import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const MainLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className="relative mx-auto z-10 md:my-20 flex flex-col items-center justify-center h-full  w-full">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
