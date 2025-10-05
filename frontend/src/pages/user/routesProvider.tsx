import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import Home from "../Home";
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";
import Login from "../Login";
import AdminLayout from "../../components/layout/AdminLayout";
import AdminHome from "../admin/AdminHome";
import UserLayout from "../../components/layout/UserLayout";
import UserHome from "./UserHome";
import ProtectedRoute from "../../routes/ProtectedRoute";
import AdminDashboard from "../admin/AdminDashboard";
import ManageBooks from "../admin/ManageBooks";
import EditBook from "../admin/EditBook";
import BookList from "./BookList";
import UserDashboard from "./UserDashboard";
import IssuedBooks from "./IssuedBooks";
import UserCart from "../../components/User/UserCart";
import GetAuthors from "../admin/GetAuthors";
import AddBook from "../admin/AddBook";

const RoutesProvider: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/login", element: <Login /> },
                // { path: "/", element: <Register /> },
                { path: "/about", element: <About /> },
                { path: "/services", element: <Services /> },
                { path: "/contact", element: <Contact /> },
            ],
        },
        {
            path: "/admin",
            element: <ProtectedRoute isAdminRoute={true}>
                <AdminLayout />
            </ProtectedRoute>,
            children: [
                { path: "", element: <AdminHome /> },
                { path: "dashboard", element: <AdminDashboard /> },
                { path: "manage-books", element: <ManageBooks /> },
                { path: "manage-users", element: <AdminDashboard /> },
                { path: "add-book", element: <AddBook /> },
                // { path: "analytics", element: <AdminDashboard /> },
                { path: "analytics", element: <GetAuthors /> },
                { path: "library-books", element: <BookList /> },
                { path: "edit-book/:id", element: <EditBook /> },
            ],
        },
        {
            path: "/user",
            element: <ProtectedRoute>
                <UserLayout />
            </ProtectedRoute>,
            children: [
                { path: "", element: <UserHome /> },
                { path: "dashboard", element: <UserDashboard /> },
                { path: "issued-books", element: <IssuedBooks /> },
                { path: "library-books", element: <BookList /> },
                { path: "carts", element: <UserCart /> },
            ],
        },
        {
            path: "*",
            element: <Login />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default RoutesProvider;

