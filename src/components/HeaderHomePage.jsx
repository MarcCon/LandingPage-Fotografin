import React from "react";

const HeaderHomePage = () => {
  return (
    <div className="h-[500px] bg-[url('/HeaderBildHelene.jpg')] bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <div className="items-left ml-8 flex h-full flex-col justify-center xl:ml-32 2xl:ml-32">
        <div className="font-serif text-4xl text-white  sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
          <h1 className="pb-8">Ihre Momente.</h1>
          <h1 className="pb-8">Festgehalten für die Ewigkeit.</h1>
        </div>
        <div className=" text-md l:text-3xl font-serif sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl ">
          <button className="h-auto w-auto rounded-lg border border-white bg-transparent p-2 px-12   font-semibold text-white transition duration-500 ease-in-out hover:bg-white hover:text-black ">
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
