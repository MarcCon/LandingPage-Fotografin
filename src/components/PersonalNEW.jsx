import React from "react";

const PersonalNEW = () => {
  return (
    <div className="mx-auto my-16 w-[80%]">
      <div className="flex flex-row justify-between">
        <div className=" basis-1/3">
          <h1 className="mb-8 font-serif text-6xl font-light">
            Hi, ICH BIN LARA UND ICH BIN FOTOGRAFIN
          </h1>

          <img src="/BilderSeiten/abiball/Abi13.jpg" />
        </div>

        <div className="mt-28 basis-2/3">
          <div className="mx-auto w-[80%]">
            <p className="mb-4 font-serif text-4xl">ÜBER MICH</p>
            <p className="font-serif text-2xl">
              Ich bin 21 Jahre alt und studiere in Leipzig Grundschullehramt.
              Seit meiner Jugend fotografiere ich leidenschaftlich. Vor 3 Jahren
              habe ich angefangen, mein Hobby zum Beruf zu machen, und heute
              fotografiere ich vor allem Hochzeiten und Familienveranstaltungen.
            </p>
            <button className="mt-8 border border-black p-2 px-6 font-serif text-lg">
              Mehr Erfahren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNEW;
