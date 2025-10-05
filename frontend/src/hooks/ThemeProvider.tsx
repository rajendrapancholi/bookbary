import React, {
    createContext,
    ReactNode,
    useEffect,
    useState,
    use,
} from "react";

// Define the type for the context value
interface ThemeContextType {
    theme: "light" | "dark"; // Specify the theme type
    toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the provider component
const ThemeProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
    const [theme, setTheme] = useState<"light" | "dark">("dark"); // Default to light theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark"; // Type assertion
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Update the body and documentElement classes based on the theme
        const bodyEl = document.body;
        if (theme === "dark") {
            bodyEl.classList.add("dark");
            document.documentElement.classList.add("dark");
        } else {
            bodyEl.classList.remove("dark");
            document.documentElement.classList.remove("dark");
        }
        // Save the theme to localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
const useTheme = () => {
    // const themeContext = useContext(ThemeContext); // Use useContext instead of use
    const themeContext = use(ThemeContext); // Use useContext instead of use
    if (themeContext === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return themeContext;
};

export { ThemeProvider, useTheme };
