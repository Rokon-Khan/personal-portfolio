import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#home" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="text-3xl font-bold">
            <span className="text-green-600">&lt;Rokon Dev/&gt;</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-xl menu-horizontal px-1">
            <li>
              <a href="#home" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>

            <li>
              <a href="#resume" className="text-gray-600 hover:text-gray-900">
                My Resume
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none">
            <button
              className="btn btn-ghost btn-circle"
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
                </svg>
              )}
            </button>
          </div>
          <a
            href="https://drive.google.com/file/d/1By6WjyxtM7VII1vEyREHQDRn4Pqmukwo/view?usp=sharing"
            target="_blank"
            className="btn bg-green-600 font-bold text-white text-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
