import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme);
  }, []);

  // Toggle between light and dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return (
    <header className="bg-gray-900 dark:bg-gray-800 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>
        <nav className="flex space-x-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? "underline text-yellow-400" : "hover:underline")}>
            Home
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? "underline text-yellow-400" : "hover:underline")}>
            Categories
          </NavLink>
          <NavLink to="/taskinput" className={({ isActive }) => (isActive ? "underline text-yellow-400" : "hover:underline")}>
           TaskInput
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "underline text-yellow-400" : "hover:underline")}>
            About
          </NavLink>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700 transition">
          {darkMode ? <FaMoon className="text-xl" /> : <FaSun className="text-xl" />}
        </button>
      </div>
    </header>
  );
};

export default Header;

