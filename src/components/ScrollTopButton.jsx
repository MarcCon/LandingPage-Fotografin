import React, { useState, useEffect } from "react";
import { IoIosArrowDropup } from "react-icons/io";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      style={{ display: isVisible ? "block" : "none" }}
    >
      <button
        onClick={scrollToTop}
        className="rounded-full bg-white p-2"
        aria-label="Zurück nach oben"
        tabIndex={isVisible ? "0" : "-1"}
      >
        <IoIosArrowDropup className="text-5xl md:text-6xl" />
      </button>
    </div>
  );
};

export default ScrollTopButton;
