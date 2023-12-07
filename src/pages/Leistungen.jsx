import React from "react";
import Navbar from "../components/Navbar";
import HeaderStory from "../components/HeaderStory";

const Leistungen = () => {
  return (
    <>
      <div className="relative">
        <HeaderStory />
        <div className="absolute left-0 top-0 w-full">
          {/* Navbar über dem Header */}
          <Navbar />
        </div>
      </div>
      <div></div>
      <div>Leistungen</div>;
    </>
  );
};

export default Leistungen;
