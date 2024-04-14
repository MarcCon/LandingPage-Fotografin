import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMobil = ({ isOpen, setIsOpen }) => {
  const sidebarVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
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
          className="fixed inset-0 z-50 flex flex-col gap-5 bg-slate-200 p-2 text-center text-2xl md:hidden"
        >
          <AiOutlineClose
            className="text-blue absolute right-2 top-2 duration-150 hover:text-red-400"
            onClick={() => setIsOpen(false)}
          />

          <Link to="/" className="pt-32" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to="/#uebermich" className="" onClick={() => setIsOpen(false)}>
            ÜBER MICH
          </Link>
          <Link to="/#leistungen" className="" onClick={() => setIsOpen(false)}>
            LEISTUNGEN
          </Link>
          <Link to="/#portfolio" className="" onClick={() => setIsOpen(false)}>
            PORTFOLIO
          </Link>
          <Link to="/#kontakt" className="" onClick={() => setIsOpen(false)}>
            KONTAKT
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobil;
