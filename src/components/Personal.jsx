import React from "react";

const Personal = () => {
  return (
    <>
      <div className="mt-32 grid grid-cols-6">
        <div></div>
        <div className="col-span-2">
          <h2
            className=" scroll-smooth font-serif text-6xl	font-thin"
            id="Anker1"
          >
            Hi, ich bin Lara
          </h2>
        </div>
      </div>

      <div className=" my-24 grid grid-cols-7">
        <div></div>
        <div className=" col-span-2 ml-24 w-3/4">
          <img src="src/assets/laraSymbol.png" />
        </div>
        <div></div>
        <div className="col-span-2 text-left font-serif  text-4xl tracking-wide	">
          <h2>
            Ich bin 21 Jahre alt studiere in Leipzig Grundschullehramt. Seit
            meiner Jugend fotografiere leidenschaftlich. Vor 3 Jahren habe ich
            angefangen mein Hobby zum Beruf zu machen und heute fotografiere ich
            vor allem Hochzeiten und Familienveranstaltungen.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Personal;
