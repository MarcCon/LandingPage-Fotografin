import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarMobil from "./NavbarMobil";
import { HashLink as Link } from "react-router-hash-link";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ÜBER MICH", path: "/#AnkerÜberMich" },
  { name: "PORTFOLIO", path: "/#AnkerPortfolio" },
  { name: "LEISTUNGEN", path: "/#AnkerLeistungen" },
  { name: "KONTAKT", path: "/#AnkerKontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="absolute left-0 top-0 flex w-full flex-wrap items-center justify-between pt-8 lg:text-lg">
        <img
          src={"/LogoWeiss.svg"}
          alt="Logo"
          className="z-10 ml-8 h-20 sm:ml-16 md:h-20 lg:h-24 xl:ml-16 xl:h-28 2xl:ml-32 2xl:h-32"
        />
        <div className="mr-8 sm:pr-8 md:pr-16">
          <div className="hidden font-serif text-lg md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="after:transition-width relative mx-4 block w-fit py-2 text-2xl text-white after:absolute after:left-1/2 after:right-1/2 after:block after:h-[1px] after:bg-custom-hover after:duration-300 after:content-[''] hover:after:left-0 hover:after:right-0 sm:mx-2 sm:text-sm lg:mx-4 lg:text-lg xl:mx-8 xl:text-xl 2xl:text-2xl"
              >
                {link.name}
              </Link>
            ))}
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
