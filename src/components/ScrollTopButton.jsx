import React, { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Überwachen des Scroll-Status der Seite
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funktion, um zum Seitenanfang zu scrollen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Hinzufügen des EventListeners beim Mounten und Entfernen beim Unmounten
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 z-20 ${
        isVisible ? "opacity-100 duration-300 ease-in" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className=" rounded-full bg-white 

"
      >
        <IoIosArrowDropup size={50} />
      </button>
    </div>
  );
};

export default ScrollTopButton;
