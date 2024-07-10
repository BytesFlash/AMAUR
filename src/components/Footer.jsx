import React from "react";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-96 md:w-auto">
          <a
            href="#"
            className="text-2xl font-bold  p-1 left-0 text-white flex items-center"
          >
            <img
              src="logo-AMAUR-T.png"
              alt="Amaur Logo"
              className="h-16 md:h-20 mr-12"
            />
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="https://www.instagram.com/amaurchile/" target="_blank" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>

      <div className="mt-20">
        <p className="text-gray-300 text-center">
          © AMAUR 2024 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
