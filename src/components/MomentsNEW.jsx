import React from "react";

const MomentsNEW = () => {
  return (
    <div className="mb-8 mt-8 h-full bg-background-blue pb-16 md:mb-16 md:mt-16 lg:mb-32 lg:mt-32">
      <div className="mx-auto w-[85%]">
        <div className=" mb-8 pt-4 text-center font-serif text-3xl sm:text-3xl md:text-4xl lg:mb-0 lg:text-left  lg:text-5xl 2xl:mb-16 ">
          <h3>MIT MEINER KAMERA HALTE ICH</h3>
          <h3>DIE SCHÖNSTEN MOMENTE FEST</h3>
        </div>
        <div className="flex flex-col items-center justify-between  lg:flex-row">
          <img
            src="/MomentsGruppePic.png"
            className="h-auto w-full md:h-[500px] md:w-auto lg:h-[400px] lg:w-auto xl:h-[500px] xl:w-auto 2xl:h-[600px] 2xl:w-auto"
          />
          <img
            src="/Line.jpg"
            className="mx-8 my-8 h-[1px] w-full lg:h-[400px] lg:w-[1px] xl:mx-16 xl:h-[500px] 2xl:h-[600px]"
          />
          <div className=" text-center font-serif lg:pt-24 ">
            <h3 className="mb-8 text-4xl sm:text-5xl">
              Licht, Kamera, Emotionen.
            </h3>
            <div>
              <h3 className=" text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </h3>
            </div>
            <button className="mt-8 border border-black bg-transparent p-2 px-6 font-serif  text-lg transition duration-200 ease-in-out hover:border-yellow-500">
              Mehr Ansehen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomentsNEW;
