import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaDev } from "react-icons/fa";
import ExternalLink from "./common/externalLink";

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
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>

      <div>
        <div className="grid grid-flow-col gap-4">
          <IconContext.Provider value={{ size: "2em" }}>
            <ExternalLink
              path="https://www.linkedin.com/in/matthew-lafalce/"
              icon={<FaLinkedin />}
            />
            <ExternalLink
              path="https://github.com/MatthewLaFalce"
              icon={<FaGithub />}
            />
            <ExternalLink
              path="https://dev.to/matthewlafalce"
              icon={<FaDev />}
            />
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
