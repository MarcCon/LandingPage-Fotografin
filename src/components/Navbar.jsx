import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="  bg-[url('src/assets/BackgroundHeader.png')] max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="/src/assets/LaraLogoWebsite.png"
          className="h-28 pt-6 p  "
        ></img>

        <div className="hidden md:flex space-x-16 text-lg font-serif ">
          {/* Desktop Links */}

          <a
            href="#"
            className="mx-3 py-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-hover after:left-1/2 after:right-1/2 after:transition-width after:duration-300 hover:after:left-0 hover:after:right-0"
          >
            HOME
          </a>

          <a
            href="#"
            className="mx-3 py-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-hover after:left-1/2 after:right-1/2 after:transition-width after:duration-300 hover:after:left-0 hover:after:right-0"
          >
            ÜBER MICH
          </a>
          <a
            href="#"
            className="mx-3 py-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-hover after:left-1/2 after:right-1/2 after:transition-width after:duration-300 hover:after:left-0 hover:after:right-0"
          >
            PORTFOLIO
          </a>
          <a
            href="#"
            className="mx-3 py-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-hover after:left-1/2 after:right-1/2 after:transition-width after:duration-300 hover:after:left-0 hover:after:right-0"
          >
            LEISTUNGEN
          </a>
          <a
            href="#"
            className="mx-3 py-2 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-hover after:left-1/2 after:right-1/2 after:transition-width after:duration-300 hover:after:left-0 hover:after:right-0"
          >
            KONTAKT
          </a>
        </div>
        <div className="md:hidden">
          {/* Hamburger Menu */}
          <RxHamburgerMenu
            size={30}
            className="text-red"
            onClick={toggleMenu}
          />
        </div>

        <div
          className={`md:hidden flex flex-col gap-5  h-screen text-2xl  bg-blue-400 py-2 absolute right-0 top-0 w-60 transition-all ease-in-out duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AiOutlineClose
            className="absolute right-2 top-2 text-blue hover:text-red-400 duration-150 "
            onClick={() => setIsOpen(false)}
          />
          <a href="#" className="text-white block text-center ">
            Home
          </a>
          <a href="#" className="text-white block text-center ">
            About
          </a>
          <a href="#" className="text-white block text-center ">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
