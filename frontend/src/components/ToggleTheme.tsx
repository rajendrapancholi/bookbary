"use client";
import React from "react";

import { useTheme } from "../hooks/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Use the custom hook

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="transition-all  active:scale-90"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ToggleTheme;
