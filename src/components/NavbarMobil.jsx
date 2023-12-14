import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMobil = ({ isOpen, setIsOpen }) => {
  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          transition={{ duration: 0.5 }}
          className="absolute right-0 top-0 flex h-[500px] w-60 flex-col gap-5 bg-slate-200 py-2 text-center text-2xl md:hidden"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobil;
