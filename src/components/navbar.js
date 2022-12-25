import React from "react";
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#Why21tiny" className="ml-3 text-xl">
            21tiny
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#solutions" className="mr-5 hover:text-white">
            Solutions
          </a>
          <a href="#pricing" className="mr-5 hover:text-white">
            Pricing
          </a>
          <a href="https://github.com/liuhangfan" target="_blank" className="mr-5 hover:text-white">
            github
          </a>
        </nav>
        <a
          href="https://hangfan.link" target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          contact Me
          <ContactPageIcon  fontSize="medium" />
        </a>
      </div>
    </header>
  );
}