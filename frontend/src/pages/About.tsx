import React from "react";

const About: React.FC = () => {
    return (
        <div className="relative">
            <div className="home-background opacity-35 h-screen w-screen fixed -top-14 -bottom-3 overflow-hidden"></div>
            <div className="relative z-10 pl-1 md:pb-20 flex flex-col items-center justify-center h-full w-[99vw]">
                {/* Hero Section */}
                <section className="h-[75vh] w-full overflow-hidden flex items-center justify-center">
                    <div className="text-center px-4 md:px-8">
                        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                            About <span className="bg-clip-text text-transparent bg-gradient">BookBary</span>
                        </h1>
                        <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                            BookBary is designed to revolutionize the way libraries operate. Our platform helps streamline
                            management, improves efficiency, and delivers an outstanding experience for users and librarians.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="container mx-auto p-8 text-center">
                    <h2 className="text-3xl font-semibold text-gray-200 mb-8">
                        🎯 Our Mission
                    </h2>
                    <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
                        Empower libraries with cutting-edge technology to simplify their operations and deliver a seamless
                        experience for readers.
                    </p>
                </section>

                {/* Call to Action */}
                <section className="mx-1 bg-gradient-to-r shadow-xs shadow-amber-300/65 rounded-2xl from-amber-800/30 to-amber-900/50 text-white py-16 text-center w-full">
                    <h2 className="text-3xl font-bold mb-4">🚀 Join Us Today!</h2>
                    <p className="text-lg mb-6">
                        Be a part of a growing community enhancing library management worldwide.
                    </p>
                    <a
                        href="/signup"
                        className="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all bg-gradient-btn active:scale-95 cursor-pointer"
                    >
                        Learn More
                    </a>
                </section>
            </div>
        </div>
    );
};

export default About;
