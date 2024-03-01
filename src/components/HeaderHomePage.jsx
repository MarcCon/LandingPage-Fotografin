import React from "react";
import Navbar from "./Navbar";

const HeaderHomePage = () => {
  return (
    <div className="h-[400px] bg-[url('/BilderHomepage/HeaderBildHelene.jpg')] bg-cover bg-center bg-no-repeat sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <Navbar />
      <div className="ml-8 flex h-full flex-col items-start justify-center sm:ml-16 2xl:ml-32">
        <h1 className="mt-8 font-serif text-3xl text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Individualität. Für immer festgehalten.
          <br />
          In deinen Bildern.
        </h1>
        <button className="mt-8 rounded-lg border border-white bg-transparent p-2 px-12 text-base font-thin text-white transition duration-500 ease-in-out hover:bg-white hover:text-black sm:text-xl lg:text-2xl xl:text-3xl">
          Kontakt
        </button>
      </div>
    </div>
  );
};

export default HeaderHomePage;
