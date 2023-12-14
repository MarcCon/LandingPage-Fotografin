import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiInstagram } from "react-icons/ci";
import NavbarMobil from "./NavbarMobil";

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
            {/* ...Weitere Navigationslinks... */}
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
