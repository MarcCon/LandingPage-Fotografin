import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiInstagram } from "react-icons/ci";
import NavbarMobil from "./NavbarMobil";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between pt-8 lg:text-lg">
        <img
          src={"/LogoWeiss.svg"}
          className="z-10 ml-8 h-20 md:h-20 lg:h-24 xl:ml-32 xl:h-28 2xl:h-32"
        ></img>

        <div className="pr-16">
          <div className="hidden  font-serif text-lg md:flex ">
            <Link
              to="/"
              className="  md:text-md after:transition-width relative mx-4 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0 sm:mx-2 sm:text-sm lg:mx-4 lg:text-lg xl:mx-8 xl:text-xl 2xl:text-2xl"
            >
              HOME
            </Link>

            <Link
              to="/#AnkerÜberMich"
              className="  md:text-md after:transition-width relative mx-4 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0 sm:mx-2 sm:text-sm lg:mx-4 lg:text-lg xl:mx-8 xl:text-xl 2xl:text-2xl"
            >
              ÜBER MICH
            </Link>

            <Link
              to="/#AnkerPortfolio"
              className="  md:text-md after:transition-width relative mx-4 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0 sm:mx-2 sm:text-sm lg:mx-4 lg:text-lg xl:mx-8 xl:text-xl 2xl:text-2xl"
            >
              PORTFOLIO
            </Link>

            <Link
              to="/#AnkerLeistungen"
              className="  md:text-md after:transition-width relative mx-4 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0 sm:mx-2 sm:text-sm lg:mx-4 lg:text-lg xl:mx-8 xl:text-xl 2xl:text-2xl"
            >
              LEISTUNGEN
            </Link>

            <Link
              to="/#AnkerKontakt"
              className="  md:text-md after:transition-width relative mx-4 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0 sm:mx-2 sm:text-sm lg:mx-4 lg:text-lg xl:mx-8 xl:text-xl 2xl:text-2xl"
            >
              KONTAKT
            </Link>
            <CiInstagram className="pt-1" size={40} color="white" />
          </div>

          <div className="md:hidden">
            <RxHamburgerMenu
              size={30}
              className="text-white"
              onClick={toggleMenu}
            />
            <NavbarMobil isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
