import React from "react";

const HeaderHomePage = () => {
  return (
    <div className="h-[400px] bg-[url('/HeaderBildHelene.jpg')] bg-cover bg-center bg-no-repeat sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <div className="ml-8 flex h-full flex-col items-start justify-center sm:ml-16 md:ml-16 xl:ml-16 2xl:ml-32">
        <h1 className="mt-16 font-serif text-3xl text-white sm:mt-8 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Individualität. Für immer Festgehalten.
          <br />
          In deinen Bildern.
        </h1>
        <button className="text-md mt-8 rounded-lg border border-white bg-transparent p-2 px-12 font-thin text-white transition duration-500 ease-in-out hover:bg-white hover:text-black sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
          Kontakt
        </button>
      </div>
    </div>
  );
};

export default HeaderHomePage;
