import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src="logo200.png" alt="logo" />
          </div>
        </div>
        <p className="font-bold">
          Matthew LaFalce <br />
          Providing reliable tech since 2018
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
