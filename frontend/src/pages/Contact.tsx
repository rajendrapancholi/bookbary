import React from "react";
import { NavLink } from "react-router-dom";

const Contact: React.FC = () => {
    return (
        <div className="relative">
            <div className="home-background opacity-35 h-screen w-screen fixed -top-14 -bottom-3 overflow-hidden"></div>
            <div className="relative z-10 pl-1 md:pb-20 flex flex-col items-center justify-center h-full w-[99vw]">
                {/* Hero Section */}
                <section className="h-[75vh] w-full overflow-hidden flex items-center justify-center">
                    <div className="text-center px-4 md:px-8">
                        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            Contact <span className="bg-clip-text text-transparent bg-gradient">Us</span>
                        </h1>
                        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                            Get in touch with us for any queries, partnerships, or assistance. We are here to help!
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="container mx-auto p-8 text-center">
                    <h2 className="text-3xl font-semibold text-gray-200 mb-8">
                        📧 Reach Out to Us
                    </h2>
                    <form className="max-w-lg mx-auto space-y-6">
                        <input
                            type="text"
                            className="w-full p-3 mb-4 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl dark:placeholder:text-gray-400"
                            placeholder="Your Name"
                        />
                        <input
                            type="email"
                            className="w-full p-3 mb-4 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl dark:placeholder:text-gray-400"
                            placeholder="Your Email"
                        />
                        <textarea
                            rows={4}
                            className="w-full p-3 mb-4 dark:text-gray-100 outline-none ring ring-gray-500 dark:ring-gray-300 rounded-xl dark:placeholder:text-gray-400"
                            placeholder="Your Message"
                        ></textarea>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-btn text-white text-lg font-semibold rounded-lg shadow-lg transition-all active:scale-95 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </section>

                {/* Call to Action */}
                <section className="mx-1 bg-gradient-to-r shadow-xs shadow-amber-300/65 rounded-2xl from-amber-800/30 to-amber-900/50 text-white py-16 text-center w-full">
                    <h2 className="text-3xl font-bold mb-4">📞 We’re Here for You!</h2>
                    <p className="text-lg mb-6">
                        Our support team is ready to assist you anytime.
                    </p>
                    <NavLink
                        to="/"
                        className="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all bg-gradient-btn active:scale-95 cursor-pointer"
                    >
                        Back to Home
                    </NavLink>
                </section>
            </div>
        </div>
    );
};

export default Contact;
