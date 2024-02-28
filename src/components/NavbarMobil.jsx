import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMobil = ({ isOpen, setIsOpen }) => {
  const sidebarVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }, // Bewegung beginnt von -100% (außerhalb des Bildschirms oben)
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
          className="fixed inset-0 z-50 flex flex-col gap-5 bg-slate-200 p-2 text-center text-2xl md:hidden" // Anpassung für Vollbild und Position
        >
          <AiOutlineClose
            className="text-blue absolute right-2 top-2 duration-150 hover:text-red-400"
            onClick={() => setIsOpen(false)}
          />
          <Link to="/" className="">
            HOME
          </Link>
          <Link to="/#AnkerÜberMich" className="">
            ÜBER MICH
          </Link>
          <Link to="/#AnkerLeistungen" className="">
            LEISTUNGEN
          </Link>
          <Link to="/#AnkerPortfolio" className="">
            PORTFOLIO
          </Link>
          <Link to="/#AnkerKontakt" className="">
            KONTAKT
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobil;
