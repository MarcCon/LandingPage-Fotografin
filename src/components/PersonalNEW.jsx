import React from "react";

const PersonalNEW = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="basis-1/3">
        <h1 className="font-serif text-6xl">
          Hi, ICH BIN HOCHZEITS -UND ALLGEMEINFOTOGRAFIN
        </h1>

        <img src="/BilderSeiten/abiball/Abi13.jpg" />
      </div>

      <div className="basis-2/3">
        <p className="font-serif text-2xl">
          Ich bin 21 Jahre alt und studiere in Leipzig Grundschullehramt. Seit
          meiner Jugend fotografiere ich leidenschaftlich. Vor 3 Jahren habe ich
          angefangen, mein Hobby zum Beruf zu machen, und heute fotografiere ich
          vor allem Hochzeiten und Familienveranstaltungen.
        </p>

        <button className="border border-black p-4">Mehr Erfahren</button>
      </div>
    </div>
  );
};

export default PersonalNEW;
