import React from "react";

const Moments = () => {
  return (
    <section className="my-8 h-full bg-background-blue py-8 md:my-16 lg:my-32">
      <div className="mx-auto w-[85%] 2xl:w-[75%]">
        <header className="pb-4 pt-8 text-center font-serif text-3xl md:text-3xl lg:text-left lg:text-4xl xl:text-5xl 2xl:mb-8">
          <h2>
            JEDE LIEBE UND JEDER AUGENBLICK
            <br />
            SIND ES WERT GESEHEN ZU WERDEN
          </h2>
        </header>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <img
            src="/BilderHomepage/MomentsGruppePic.png"
            alt="Gruppenbild"
            className="h-auto w-full md:h-[500px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]"
          />
          <img
            src="/BilderHomepage/Line.jpg"
            alt="Dekorative Linie"
            className="mx-8 mb-2 mt-8 h-[1px] w-full lg:mx-16 lg:h-[400px] lg:w-[1px] xl:h-[500px] 2xl:h-[600px]"
          />
          <article className="text-center font-serif lg:my-auto">
            <h3 className="mb-8 text-lg md:text-xl xl:text-2xl 2xl:text-2xl">
              Mir ist das wirklichkeitsgetreue und spontane Festhalten von
              persönlichen Momenten wichtig. Dafür lege ich großen Wert auf die
              Details und Emotionen, denn diese machen eure Bilder zu etwas
              Einzigartigem. Mein Fokus liegt auf der Reportagefotografie.
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Moments;
