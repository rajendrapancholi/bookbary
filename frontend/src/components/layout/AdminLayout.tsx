import React from "react";
import { Outlet } from "react-router-dom";
import AdminRoutes from "../../routes/AdminRoutes";
import AdminSidebar from "../Admin/AdminSidebar";
import AdminNavbar from "../Admin/AdminNavbar";

const AdminLayout: React.FC = () => {
    return (
        <AdminRoutes>
            <div className="flex relative">
                <header className="md:w-20 max-md:flex-1/12 fixed top-0 left-0 z-50">
                    <AdminSidebar />
                </header>
                <aside className="fixed left-20 right-0 top-0 z-50">
                    <AdminNavbar />
                </aside>
                <main className="ml-20 mt-20 flex-11/12">
                    <Outlet />
                </main>
            </div>
        </AdminRoutes>
    );
};

export default AdminLayout;
