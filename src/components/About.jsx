import React from "react";
import { CiInstagram, CiMail } from "react-icons/ci";

const About = () => {
  return (
    <section
      id="AnkerÜberMich"
      className="mx-auto my-24 w-[85%] sm:pt-8 xl:w-[65%]"
    >
      <div className="flex flex-col md:flex-row-reverse md:items-center">
        <header className="text-center md:basis-1/3 md:text-left">
          <h2 className="mb-8 font-serif text-5xl font-bold">
            HI, ICH BIN LARA
          </h2>
          <img
            src="/BilderHomepage/lara.jpeg"
            alt="Bild von Lara"
            className="mx-auto h-auto w-[350px] rounded-2xl md:w-full"
          />
        </header>
        <div className="text-center md:mt-0 md:basis-2/3 md:text-left">
          <h3 className="mb-4 mt-8 font-serif text-4xl">ÜBER MICH</h3>
          <p className="pb-4 font-serif text-2xl xl:pr-32">
            Ich bin 21 Jahre alt und studiere in Leipzig. Seit meiner Jugend
            fotografiere ich leidenschaftlich. Vor 3 Jahren habe ich angefangen,
            mein Hobby zum Beruf zu machen, und heute fotografiere ich vor allem
            Hochzeiten und Familienveranstaltungen.
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            <a
              href="https://www.instagram.com/larasophiekuche/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lara auf Instagram"
            >
              <CiInstagram size={40} color="black" />
            </a>
            <a
              href="mailto:kontakt@larakuche-fotografie.de"
              aria-label="E-Mail an Lara"
            >
              <CiMail size={40} color="black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
