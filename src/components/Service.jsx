import React, { useState } from "react";

const ServiceBox = ({ title, description, image, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[370px] w-full max-w-sm flex-1 rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
    >
      <div className="flex h-[70px] flex-col sm:h-[40px] md:h-[50px] lg:h-[60px] xl:h-[70px]">
        <img
          src={image}
          alt=""
          className={`absolute inset-0 mx-auto mb-4 h-auto w-16 pt-4 transition-opacity duration-300 ease-in-out sm:w-10 md:w-12 lg:w-14 xl:w-16 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        {hoverImage && (
          <img
            src={hoverImage}
            alt=""
            className={`absolute inset-0 mx-auto mb-4 h-auto w-16 pt-4 transition-opacity duration-300 ease-in-out sm:w-10 md:w-12 lg:w-14 xl:w-16 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
      <h5 className="my-4 text-3xl font-light tracking-tight text-gray-900 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {title}
      </h5>
      <div className="h-[200px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px]">
        <p className="md:text-md font-serif text-xl text-gray-700 sm:text-sm lg:text-lg xl:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="mx-auto w-[350px] sm:w-[85%] md:w-[85%] lg:w-[85%] xl:w-[75%] 2xl:w-[1000px] ">
      <h3
        id="AnkerLeistungen"
        className="text-center font-serif text-5xl text-yellow-500 sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl"
      >
        Meine Leistungen
      </h3>
      <h2 className="mb-8 text-center font-serif text-4xl font-light md:text-5xl">
        Was ihr erwarten könnt
      </h2>
      <div className=" flex grid-cols-1 flex-wrap gap-4 pb-16 text-center font-serif sm:grid sm:grid-cols-2 md:grid-cols-3">
        <ServiceBox
          image="/Icons/IconRinge.png"
          hoverImage="/Icons/IconRingeFarbe.png"
          title="HOCHZEITEN"
          description="Halte den Zauber deines großen Tages fest. Ich kümmere mich um eine authentische und professionelle Dokumentation Ihrer Hochzeit – von den stillen Augenblicken bis hin zu den ausgelassenen Festen."
        />
        <ServiceBox
          image="/Icons/IconFamilie.png"
          hoverImage="/Icons/IconFamilieFarbe.png"
          title="FAMILIENFEIERN"
          description="Ob Geburtstage, Jubiläen oder Familientreffen – ich fange die Liebe und das Lachen deiner Familie in wunderschönen Bildern ein."
        />
        <ServiceBox
          image="/Icons/IconKamera.png"
          hoverImage="/Icons/IconKameraFarbe.png"
          title="FOTOSHOOTINGS"
          description="Ob Porträts, Paar-Shootings oder individuelle Projekte – ich biete maßgeschneiderte Fotoshootings, die deine einzigartigen Persönlichkeiten und Momente in Szene setzen."
        />
      </div>
    </div>
  );
};

export default Service;
