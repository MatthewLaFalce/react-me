import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Root = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <>
      <Navbar />
      <main id="detail" className="container mx-auto flex-grow m-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
