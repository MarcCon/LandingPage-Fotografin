import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="min-h-[800px] w-full bg-[url('/src/assets/HeaderBildHelene.png')] bg-cover bg-center bg-no-repeat">
        <nav className="  mx-32 flex flex-wrap items-center justify-between p-8">
          <img src="/src/assets/LogoWeiss.svg" className="h-42 "></img>

          <div className="hidden space-x-16 font-serif text-lg md:flex ">
            {/* Desktop Links */}

            <a
              href="#"
              className=" after:transition-width relative mx-3 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0"
            >
              HOME
            </a>

            <a
              href="#"
              className="after:transition-width relative mx-3 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0"
            >
              ÜBER MICH
            </a>
            <a
              href="#"
              className="after:transition-width relative mx-3 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0"
            >
              PORTFOLIO
            </a>
            <a
              href="#"
              className="after:transition-width relative mx-3 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0"
            >
              LEISTUNGEN
            </a>
            <a
              href="#"
              className="after:transition-width relative mx-3 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0"
            >
              KONTAKT
            </a>

            <CiInstagram className="" size={30} color="white" />
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
            className={`absolute right-0 top-0 flex  h-screen w-60  flex-col gap-5 bg-blue-400 py-2 text-2xl transition-all duration-500 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <AiOutlineClose
              className="text-blue absolute right-2 top-2 duration-150 hover:text-red-400 "
              onClick={() => setIsOpen(false)}
            />
            <a href="#" className="block text-center text-white ">
              Home
            </a>
            <a href="#" className="block text-center text-white ">
              About
            </a>
            <a href="#" className="block text-center text-white ">
              Contact
            </a>
          </div>
        </nav>

        <div className="ml-36 mt-32 grid grid-rows-3 gap-8">
          <h1 className="font-serif text-7xl font-extrabold text-white">
            Deine Momente.
          </h1>
          <h1 className="font-serif text-7xl font-extrabold text-white">
            Festgehalten für die Ewigkeit.
          </h1>
          <button className=" h-auto w-52 rounded-lg border border-white bg-transparent font-serif  text-xl font-semibold text-white transition duration-500 ease-in-out	  hover:border-transparent hover:bg-white hover:text-black ">
            Kontakt
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
