import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "../components/footer";
import ThemePicker from "../components/themePicker";
import BoltSvg from "../components/common/boltSvg";
import DrawerSvg from "../components/common/drawerSvg";
import NavItem from "../components/common/navItem";
import "react-toastify/dist/ReactToastify.css";
import { GoHubot, GoMarkGithub } from "react-icons/go";

const Root = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
            {/* MOBILE BUTTON FOR SIDE DRAWER */}
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <DrawerSvg />
              </label>
            </div>

            {/*  Page title */}
            <div className="flex-1 px-2 mx-2">
              <Link
                to={"/"}
                className="text-primary no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              >
                <BoltSvg />
                Matthew LaFalce
              </Link>
            </div>

            {/* Full size links */}
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal rounded-box p-2 text-primary">
                <NavItem text="About Me" path="/about_me" icon={<GoHubot />} />
                <NavItem text="Github" path="/github" icon={<GoMarkGithub />} />
                <ThemePicker />
              </ul>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <main id="detail" className="container mx-auto flex-grow m-4">
            <Outlet />
          </main>

          {/* FOOTER */}
          <Footer />
        </div>

        {/* MOBILE SIDE DRAWER */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            <NavItem text="About Me" path="/about_me" icon={<GoHubot />} />
            <NavItem text="Github" path="/github" icon={<GoMarkGithub />} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Root;
