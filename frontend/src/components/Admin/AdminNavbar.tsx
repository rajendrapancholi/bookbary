import React, { useState } from "react";
import { Settings as SettingsIcon, X } from "lucide-react";
import UserProfile from "../User/UserProfile";

const AdminNavbar: React.FC = () => {
    // State to toggle settings menu
    const [showSettings, setShowSettings] = useState(false);

    // Get formatted time and date
    const currentDate = new Date();
    const formattedTime = currentDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
    const formattedDate = currentDate.toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    // Toggle settings popup
    const toggleSetting = () => {
        setShowSettings((prev) => !prev);
    };

    return (
        <div className="relative dark:text-white/70 flex py-1 items-center justify-between px-4 dark:bg-gray-800/80 shadow-[0px_5px_6px] rounded-b-lg shadow-gray-600">
            {/* User Profile Section */}
            <UserProfile />

            {/* Time and Settings Section */}
            <ul className="flex items-center">
                {/* Time and Date */}
                <li className="flex items-end flex-col my-1 border-r-2 border-gray-200 py-1 pr-3">
                    <span className="text-sm font-bold">{formattedTime}</span>
                    <span className="text-xs">{formattedDate}</span>
                </li>

                {/* Settings Button */}
                <li className="relative">
                    <button
                        className="cursor-pointer p-2 rounded-full hover:bg-gray-700/40 transition"
                        onClick={toggleSetting}
                    >
                        <SettingsIcon />
                    </button>
                </li>
            </ul>

            {/* Full-screen Overlay and Popup Center */}
            {showSettings && (
                <>
                    {/* Overlay to close when clicking outside */}
                    <div
                        className="fixed inset-0 bg-black/20 z-40"
                        onClick={() => setShowSettings(false)}
                    />

                    {/* Centered Popup */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-gray-800 text-white w-96 p-6 rounded-lg shadow-lg relative">
                            <h2 className="text-xl font-bold mb-4">User Settings</h2>

                            <ul className="space-y-3">
                                <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">
                                    Profile Settings
                                </li>
                                <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">
                                    Account Security
                                </li>
                                <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">
                                    Change Password
                                </li>
                                <li className="p-2 hover:bg-gray-700 cursor-pointer rounded">
                                    Logout
                                </li>
                            </ul>

                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-white"
                                onClick={() => setShowSettings(false)}
                            >
                                <X />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminNavbar;
