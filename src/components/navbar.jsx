import React from "react";
import ThemePicker from "../components/themePicker";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="header" className="w-full z-30 top-0 py-1 lg:py-6">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
        <div className="pl-4 flex items-center">
          <Link
            to={"/"}
            className="text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <svg
              className="h-6 w-6 inline-block fill-current text-yellow-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
            </svg>
            Matthew LaFalce
          </Link>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3 ">
              <NavLink
                className="inline-block link-primary link-hover py-2 px-4"
                to="/github"
              >
                Github
              </NavLink>
            </li>
            <li className="mr-3 ">
              <NavLink
                className="inline-block link-primary link-hover py-2 px-4"
                to="/about_me"
              >
                About Me
              </NavLink>
            </li>
          </ul>
          <ThemePicker />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
