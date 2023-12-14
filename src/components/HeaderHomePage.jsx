import React from "react";

const HeaderHomePage = () => {
  return (
    <div className="h-[500px] bg-[url('/HeaderBildHelene.jpg')] bg-cover bg-center bg-no-repeat sm:h-[500px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
      <div className="items-left ml-8 flex h-full flex-col justify-center xl:ml-32 2xl:ml-32">
        <div className="font-serif text-4xl text-white  sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
          <h1 class="leading-snug">
            Jeder Augenblick. Jedes Lächeln.
            <br />
            Für immer festgehalten.
          </h1>
        </div>
        <div className=" text-md l:text-3xl font-serif sm:text-xl md:text-xl lg:text-2xl 2xl:text-3xl ">
          <button className=" mt-8 h-auto w-auto rounded-lg border border-white bg-transparent p-2 px-12   font-thin text-white transition duration-500 ease-in-out hover:bg-white hover:text-black ">
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
