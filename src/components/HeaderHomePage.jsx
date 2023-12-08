import React from "react";

const HeaderHomePage = () => {
  return (
    <div className="h-[1000px] bg-[url('/src/assets/HeaderBildHelene.png')] bg-cover bg-center bg-no-repeat">
      <div className=" grid h-full grid-rows-3	">
        <div></div>
        <div className=" pl-32 font-serif text-7xl  text-white sm:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl 2xl:text-7xl">
          <h1 className="pb-8 ">Ihre Momente.</h1>
          <h1 className="pb-8 ">Festgehalten für die Ewigkeit.</h1>
          <button className="h-auto w-auto rounded-lg border border-white bg-transparent p-4 px-12 text-xl font-semibold text-white transition duration-500 ease-in-out hover:bg-white hover:text-black">
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
