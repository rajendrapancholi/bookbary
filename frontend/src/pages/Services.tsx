import React from "react";
import { NavLink } from "react-router-dom";

const Services: React.FC = () => {
    return (
        <div className="relative">
            <div className="home-background opacity-35 h-screen w-screen fixed -top-14 -bottom-3 overflow-hidden"></div>
            <div className="relative z-10 pl-1 md:pb-20 flex flex-col items-center justify-center h-full w-[99vw]">
                {/* Hero Section */}
                <section className="h-[75vh] w-full overflow-hidden flex items-center justify-center">
                    <div className="text-center px-4 md:px-8">
                        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            Our <span className="bg-clip-text text-transparent bg-gradient">Services</span>
                        </h1>
                        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                            Explore a wide range of services provided by BookBary that cater to libraries, educational institutions, and book enthusiasts.
                        </p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="container mx-auto p-8 text-center">
                    <h2 className="text-3xl font-semibold text-gray-200 mb-8">
                        📚 Key Services We Offer
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Service 1 */}
                        <div className="bg-white dark:bg-gray-500/55 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3">📦 Book Inventory Management</h3>
                            <p className="text-gray-600 dark:text-gray-900">
                                Efficiently track, update, and manage your library’s book inventory.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white dark:bg-gray-500/55 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3">🔔 Automated Alerts</h3>
                            <p className="text-gray-600 dark:text-gray-900">
                                Get automated notifications for due dates and returns.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white dark:bg-gray-500/55 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3">🧩 User Role Management</h3>
                            <p className="text-gray-600 dark:text-gray-900">
                                Assign and manage different roles like Admin, Librarian, and User.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="mx-1 bg-gradient-to-r shadow-xs shadow-amber-300/65 rounded-2xl from-amber-800/30 to-amber-900/50 text-white py-16 text-center w-full">
                    <h2 className="text-3xl font-bold mb-4">📞 Connect With Us!</h2>
                    <p className="text-lg mb-6">
                        Ready to explore our services? Contact us to get started today.
                    </p>
                    <NavLink
                        to="/contact"
                        className="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all bg-gradient-btn active:scale-95 cursor-pointer"
                    >
                        Contact Us
                    </NavLink>
                </section>
            </div>
        </div>
    );
};

export default Services;
