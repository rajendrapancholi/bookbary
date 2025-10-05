import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../hooks/ThemeProvider'; // Import your custom theme hook

const ToastProvider: React.FC = () => {
    const { theme } = useTheme(); // Assuming 'theme' is either 'light' or 'dark'

    const lightStyles = {
        background: '#fff',
        color: '#333',
    };

    const darkStyles = {
        background: '#18181b', // Tailwind dark bg-zinc-900
        color: '#e5e7eb', // Tailwind text-gray-200 (for better readability in dark mode)
    };

    const successLight = {
        background: '#d1fae5',
        color: '#065f46',
    };

    const successDark = {
        background: '#00b5294a',
        color: '#1aff4df7',
    };

    const errorLight = {
        background: '#fee2e2',
        color: '#991b1b',
    };

    const errorDark = {
        background: '#f49393',
        color: '#780000',
    };

    const loadingLight = {
        background: '#fef3c7',
        color: '#92400e',
    };

    const loadingDark = {
        background: '#facc15',
        color: '#1e293b',
    };

    return (
        <Toaster
            position="top-center"
            toastOptions={{
                className: 'text-sm', // General text size
                style: theme === 'dark' ? darkStyles : lightStyles, // Apply the styles based on theme
                success: {
                    style: theme === 'dark' ? successDark : successLight, // Apply success toast styles based on theme
                },
                error: {
                    style: theme === 'dark' ? errorDark : errorLight, // Apply error toast styles based on theme
                },
                loading: {
                    style: theme === 'dark' ? loadingDark : loadingLight, // Apply loading toast styles based on theme
                },
            }}
        />
    );
};

export default ToastProvider;
