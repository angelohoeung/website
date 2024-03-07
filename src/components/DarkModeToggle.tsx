import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const getPreferredTheme = () => {
    const userPreference = localStorage.getItem("color-theme");
    if (userPreference) {
      return userPreference;
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <MdLightMode
          title="Switch theme"
          className="h-7 w-7 hover:text-gray-500 dark:hover:text-gray-300"
        />
      ) : (
        <MdDarkMode
          title="Switch theme"
          className="h-7 w-7 hover:text-gray-500 dark:hover:text-gray-300"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
