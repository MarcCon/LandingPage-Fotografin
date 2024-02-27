import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const PersonalNEW = () => {
  return (
    <div id="AnkerÜberMich" className="mx-auto my-24 w-[85%] sm:pt-8">
      <div className="md:flex md:flex-row-reverse md:items-center">
        <div className="text-center md:basis-1/3 md:text-left">
          <h1 className="mb-8 font-serif text-6xl font-bold">
            HI, ICH BIN LARA
          </h1>
          <img
            src="/public/girlStock.png"
            className="mx-auto h-auto w-[350px] md:w-full"
          />
        </div>
        <div className="md:mt-0 md:basis-2/3">
          <p className="mb-4 font-serif text-4xl">ÜBER MICH</p>
          <p className="pb-4 font-serif text-2xl">
            Ich bin 21 Jahre alt und studiere in Leipzig. Seit meiner Jugend
            fotografiere ich leidenschaftlich. Vor 3 Jahren habe ich angefangen,
            mein Hobby zum Beruf zu machen, und heute fotografiere ich vor allem
            Hochzeiten und Familienveranstaltungen.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/larasophiekuche/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiInstagram
                size={40}
                color="black"
                className="mx-auto md:mx-0"
              />
            </a>
            <a href="mailto:kontakt@larakuche-fotografie.de">
              <CiMail size={40} color="black" className="mx-auto md:mx-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNEW;
