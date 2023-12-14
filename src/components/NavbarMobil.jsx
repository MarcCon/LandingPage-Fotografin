import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

const NavbarMobil = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute right-0 top-0 flex h-[500px] w-60 transform flex-col gap-5 bg-slate-200 py-2 text-center text-2xl transition-all duration-500 ease-in-out md:hidden ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 "
      }`}
    >
      <AiOutlineClose
        className="text-blue absolute right-2 top-2 duration-150 hover:text-red-400"
        onClick={() => setIsOpen(false)}
      />
      <Link to="/" className="  ">
        HOME
      </Link>
      <Link to="/#AnkerÜberMich" className="  ">
        ÜBER MICH
      </Link>
      <Link to="/#AnkerPortfolio" className="  ">
        PORTFOLIO
      </Link>
      <Link to="/#AnkerLeistungen" className="  ">
        LEISTUNGEN
      </Link>
      <Link to="/#AnkerKontakt" className=" ">
        KONTAKT
      </Link>
    </div>
  );
};

export default NavbarMobil;
