import React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
    console.log(import.meta.env.API_BASE_URL, "base url");
    return (
        <div className="relative">
            <div className="home-background opacity-35 h-screen w-screen fixed -top-14 -bottom-3 overflow-hidden"></div>
            <div className="relative z-10 pl-1 md:pb-20 flex flex-col items-center justify-center h-full w-[99vw]">
                {/* Hero Section */}
                <section className="h-[75vh] w-full overflow-hidden flex items-center justify-center">
                    <div className="text-center px-4 md:px-8">
                        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            Welcome to <span className="bg-clip-text text-transparent bg-gradient">BookBary</span>
                        </h1>
                        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                            The ultimate library management system to organize, manage, and streamline your library
                            operations with ease.
                        </p>
                        <NavLink
                            to="/"
                            className="px-6 py-3 bg-gradient-btn text-white text-lg font-semibold rounded-lg shadow-lg transition-all active:scale-90"
                        >
                            Get Started Now
                        </NavLink>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto p-8 text-center">
                    <h2 className="text-3xl font-semibold text-gray-200 mb-8">
                        🚀 Why Choose <span className="bg-clip-text text-transparent bg-gradient">BookBary</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-white dark:bg-gray-500/55 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3">📚 Easy Book Management</h3>
                            <p className="text-gray-600 dark:text-gray-900">
                                Add, edit, and manage your book catalog effortlessly with a user-friendly interface.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white dark:bg-gray-500/55 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3">🔔 Automated Notifications</h3>
                            <p className="text-gray-600 dark:text-gray-900">
                                Send timely reminders to members for due dates and overdue books.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white dark:bg-gray-500/55 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold mb-3">🧑‍💻 Multi-User Roles</h3>
                            <p className="text-gray-600 dark:text-gray-900">
                                Assign roles like Admin, Librarian, and User with specific permissions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="mx-1 bg-gradient-to-r shadow-xs shadow-amber-300/65 rounded-2xl from-amber-800/30 to-amber-900/50 text-white py-16 text-center w-full">
                    <h2 className="text-3xl font-bold mb-4">📬 Get Started Today!</h2>
                    <p className="text-lg mb-6">
                        Join hundreds of libraries transforming their management with BookBary.
                    </p>
                    <a
                        href="/signup"
                        className="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all bg-gradient-btn active:scale-95 cursor-pointer"
                    >
                        Sign Up Now
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Home;
