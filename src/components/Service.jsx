import React, { useState } from "react";

const ServiceBox = ({ title, description, image, hoverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-[450px] max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl"
    >
      <div className="flex h-[70px] flex-col">
        <img
          src={image}
          className={`absolute inset-0 mx-auto mb-4 h-auto w-16 pt-4 transition-opacity duration-300 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      {hoverImage && (
        <img
          src={hoverImage}
          className={`absolute inset-0 mx-auto mb-4 h-auto w-16 pt-4 transition-opacity duration-300 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <h5 className="my-4  text-3xl font-light tracking-tight text-gray-900">
        {title}
      </h5>
      <div className="h-[200px]">
        <p className="font-serif text-xl text-gray-700">{description}</p>
      </div>
      <button className="mt-auto rounded-lg border border-black p-2">
        Mehr Erfahren
      </button>
    </div>
  );
};

const Service = () => {
  return (
    <>
      <div className="m-16 text-center font-serif text-5xl">
        MEINE LEISTUNGEN
      </div>
      <div className="m-4 flex flex-wrap items-center justify-center gap-4 pt-4 text-center font-serif">
        <ServiceBox
          image={"/Icons/IconRinge.png"}
          hoverImage={"/Icons/IconRingeFarbe.png"}
          title="HOCHZEITEN"
          description="Halten Sie den Zauber Ihres großen Tages fest. Ich kümmere mich um eine authentische und professionelle Dokumentation Ihrer Hochzeit – von den stillen Augenblicken bis hin zu den ausgelassenen Festen."
        />
        <ServiceBox
          image={"Icons/IconFamilie.png"}
          hoverImage={"Icons/IconFamilieFarbe.png"}
          title="FAMILIENFEIERN"
          description="Ob Geburtstage, Jubiläen oder Familientreffen – ich fange die Liebe und das Lachen Ihrer Familie in wunderschönen Bildern ein."
        />
        <ServiceBox
          image={"Icons/IconKamera.png"}
          hoverImage={"Icons/IconKameraFarbe.png"}
          title="FOTOSHOOTINGS"
          description="Ob Porträts, Paar-Shootings oder individuelle Projekte – ich biete maßgeschneiderte Fotoshootings, die Ihre einzigartigen Persönlichkeiten und Momente in Szene setzen."
        />
      </div>
    </>
  );
};

export default Service;
