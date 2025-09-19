import { useEffect, useState } from "react";
import logo from "/android-chrome-192x192.png";
import SocialIcons from "./SocialIcons";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const adjustScrollPadding = () => {
      const navigationHeight = document.querySelector("nav")?.offsetHeight || 0;
      document.documentElement.style.setProperty(
        "--scroll-padding",
        `${navigationHeight}px`,
      );
    };

    adjustScrollPadding();

    let resizeTimer: number | undefined;
    const handleResize = () => {
      setIsOpen(false);
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        adjustScrollPadding();
      }, 250);
    };

    screen.orientation.addEventListener("change", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      screen.orientation.removeEventListener("change", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed start-0 top-0 z-20 w-full bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4">
        <a href="#">
          <img src={logo} className="h-12" alt="Logo" />
        </a>
        <div className="flex md:order-2">
          <div className="hidden gap-2 md:flex">
            <SocialIcons />
            <DarkModeToggle />
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "md:flex" : "hidden"
          } w-full md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:gap-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
            <li className="flex w-full justify-center gap-2 py-2 md:hidden">
              <SocialIcons />
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
