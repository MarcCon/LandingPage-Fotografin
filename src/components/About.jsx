import React from "react";
import { CiInstagram, CiMail } from "react-icons/ci";

const About = () => {
  return (
    <section
      id="AnkerÜberMich"
      className="mx-auto mb-8 mt-16 w-[85%] sm:mb-24 sm:pt-8 xl:w-[65%]"
    >
      <div className="flex flex-col md:flex-row-reverse md:items-center">
        <header className="text-center md:basis-1/3 md:text-left">
          <h2 className="mb-8 font-serif text-3xl font-bold sm:text-5xl">
            HI, ICH BIN LARA
          </h2>
          <img
            src="/BilderHomepage/lara.png"
            alt="Bild von Lara"
            className="shadow-glow mx-auto h-auto w-[250px] rounded-full object-cover md:w-[350px]  " // Änderungen hier
          />
        </header>
        <div className="text-center md:mt-0 md:basis-2/3 md:text-left">
          <h3 className="mb-2 mt-8 font-serif text-2xl sm:text-4xl">
            ÜBER MICH
          </h3>
          <p className="pb-2 font-serif text-lg sm:text-2xl xl:pr-32">
            Ich bin 21 Jahre alt und studiere in Leipzig. Seit meiner Jugend
            fotografiere ich leidenschaftlich. Vor drei Jahren habe ich
            angefangen, mein Hobby zum Beruf zu machen, und heute fotografiere
            ich vor allem Hochzeiten und Familienveranstaltungen.
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            <a
              href="https://www.instagram.com/larasophiekuche/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lara auf Instagram"
            >
              <CiInstagram className="text-3xl text-black transition-colors duration-300 hover:text-yellow-500 sm:text-4xl" />
            </a>
            <a
              href="mailto:kontakt@larakuche-fotografie.de"
              aria-label="E-Mail an Lara"
            >
              <CiMail className="text-3xl text-black transition-colors duration-300 hover:text-yellow-500 sm:text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
