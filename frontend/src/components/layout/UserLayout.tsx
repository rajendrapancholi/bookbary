import React from "react";
import { Outlet } from "react-router-dom";
import UserRoutes from "../../routes/UserRoutes";
import UserSidebar from "../User/UserSidebar";
import UserNavbar from "../User/UserNavbar";


const UserLayout: React.FC = () => {
    return (
        <UserRoutes>
            <div className="flex relative">
                <header className="md:w-20 max-md:flex-1/12 fixed top-0 left-0 z-50">
                    <UserSidebar />
                </header>
                <aside className="fixed left-20 right-0 top-0 z-50">
                    <UserNavbar />
                </aside>
                <main className="ml-20 mt-20 flex-11/12">
                    <Outlet />
                </main>
            </div>
        </UserRoutes >
    );
};

export default UserLayout;
