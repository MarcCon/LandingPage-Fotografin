import React from "react";

const PersonalNEW = () => {
  return (
    <div id="AnkerÜberMich" className="mx-auto my-24 w-[85%] sm:pt-8">
      <div className="flex flex-col justify-between md:flex-row-reverse">
        <div className="basis-1/3">
          <h1 className="font-modern mb-8 text-center text-6xl font-light md:text-left md:text-7xl">
            HI, ICH BIN LARA
          </h1>
          <img src="/BilderSeiten/abiball/Abi13.jpg" />
        </div>
        <div className="mt-8 basis-2/3 md:mt-28">
          <div className="mx-auto text-center md:w-[80%] md:text-left ">
            <p className="mb-4 text-center font-serif text-4xl sm:text-left">
              ÜBER MICH
            </p>
            <p className="text-center font-serif text-2xl md:text-left ">
              Ich bin 21 Jahre alt und studiere in Leipzig Grundschullehramt.
              Seit meiner Jugend fotografiere ich leidenschaftlich. Vor 3 Jahren
              habe ich angefangen, mein Hobby zum Beruf zu machen, und heute
              fotografiere ich vor allem Hochzeiten und Familienveranstaltungen.
            </p>
            <button className="mt-8 border border-black p-2 px-6 font-serif text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNEW;
