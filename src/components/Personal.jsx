import React from "react";

const Personal = () => {
  return (
    <>
      <div className="xs:px-4 sm:px-8 md:px-20 2xl:px-32">
        <h2
          className="mt-16 text-left font-serif text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
          id="Anker1"
        >
          HI, ICH BIN LARA
        </h2>

        <div className="mt-16 flex flex-col items-center justify-around sm:flex-row ">
          <div className="w-full text-justify font-serif tracking-wide sm:w-1/2 sm:pr-4">
            <p className=" text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Ich bin 21 Jahre alt und studiere in Leipzig Grundschullehramt.
              Seit meiner Jugend fotografiere ich leidenschaftlich. Vor 3 Jahren
              habe ich angefangen, mein Hobby zum Beruf zu machen, und heute
              fotografiere ich vor allem Hochzeiten und Familienveranstaltungen.
            </p>
          </div>

          <img
            src="/Line.jpg"
            className="mx-8 my-8 h-[1px] w-full lg:h-[300px] lg:w-[1px] xl:mx-16 xl:h-[650px]"
          />
          <img
            src="/lara.jpg"
            className="h-auto w-full sm:mt-0 sm:w-1/3 sm:pl-4"
            alt="Bild von Lara"
          />
        </div>

        <div className="mt-8 text-left">
          <button className="border border-zinc-600 bg-transparent p-4 px-4 py-2 font-serif text-xl transition duration-200 ease-in-out hover:border-yellow-500 sm:text-xl  md:text-xl  lg:text-xl  xl:text-2xl  2xl:text-2xl">
            Schreibe mir deine Ideen
          </button>
        </div>
      </div>
    </>
  );
};

export default Personal;
