import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#Intro" className="ml-3 text-xl">
            21tiny
          </a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#Works" className="mr-5 hover:text-white">
            Solutions
          </a>
          <a href="#Future" className="mr-5 hover:text-white">
            Future
          </a>
          <a href="https://github.com/liuhangfan" className="mr-5 hover:text-white">
            Github
          </a>
        </nav>
        <a
          href="https://hangfan.link"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-xl mt-4 md:mt-0">
          Contact Me
          <ArrowOutwardIcon  fontSize="medium" />
        </a>
      </div>
    </header>
  );
}