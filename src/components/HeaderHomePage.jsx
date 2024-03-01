import React from "react";
import Navbar from "./Navbar";

const HeaderHomePage = () => {
  return (
    <div className="h-[400px] bg-[url('/BilderHomepage/HeaderBildHelene.jpg')] bg-cover bg-center bg-no-repeat sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Navbar />
      <div className="ml-8 flex h-full flex-col items-start justify-center sm:ml-16 2xl:ml-32">
        <h1 className="mt-8 font-serif text-2xl text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
          Individualität. <br />
          Für immer festgehalten.
          <br />
          In deinen Bildern.
        </h1>
        <a href="#AnkerKontakt">
          <button
            className="xs:px-4 mt-4 rounded-lg border border-white bg-transparent px-4 py-1 text-base font-thin text-white transition duration-500 ease-in-out hover:bg-white hover:text-black sm:text-lg md:mt-4 md:px-4 md:py-1 lg:mt-8 lg:px-6 lg:py-2 lg:text-xl xl:text-2xl"
            aria-label="Kontaktieren Sie uns"
          >
            Kontakt
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeaderHomePage;
