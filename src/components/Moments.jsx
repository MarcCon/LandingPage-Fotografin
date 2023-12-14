import React from "react";

const Moments = () => {
  return (
    <div className="mb-8 mt-8 h-full bg-background-blue pb-16 md:mb-16 md:mt-16 lg:mb-32 lg:mt-32">
      <div className="mb-16 pl-4 pt-4 font-serif text-5xl md:pl-16 md:pt-12 lg:pl-32 lg:pt-24">
        <h3>MIT MEINER KAMERA HALTE ICH</h3>
        <h3>DIE SCHÖNSTEN MOMENTE FEST</h3>
      </div>
      <div className="flex flex-col items-center justify-between lg:mx-32 lg:flex-row">
        <img
          src="/MomentsGruppePic.png"
          className="h-auto w-full lg:h-[40vh] lg:w-[60vh] xl:h-[70vh] xl:w-[100vh] 2xl:h-[70vh] 2xl:w-[100vh]"
        />
        <img
          src="/Line.jpg"
          className="mx-8 my-8 h-[1px] w-full lg:h-[300px] lg:w-[1px] xl:mx-16 xl:h-[600px]"
        />
        <div className="pl-4 pt-24 text-center font-serif ">
          <h3 className="mb-8 text-5xl">Licht, Kamera, Emotionen.</h3>
          <div>
            <h3 className="text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </h3>
          </div>
          <button className="mt-8 border border-black bg-transparent p-2 px-6 font-serif  text-lg transition duration-200 ease-in-out hover:border-yellow-500">
            Mehr Ansehen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moments;
