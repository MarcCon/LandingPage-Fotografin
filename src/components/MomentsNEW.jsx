import React from "react";

const MomentsNEW = () => {
  return (
    <div className="my-8 h-full bg-background-blue md:my-16 md:py-16 lg:my-32">
      <div className="mx-auto w-[85%]">
        <div className="pb-4 pt-8 text-center font-serif text-3xl md:text-4xl lg:text-left lg:text-5xl 2xl:mb-8">
          <h3>
            JEDE LIEBE UND JEDER AUGENBLICK
            <br />
            SIND ES WERT GESEHEN ZU WERDEN
          </h3>
        </div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <img
            src="/MomentsGruppePic.png"
            className="h-auto w-full md:h-[500px] md:w-auto lg:h-[400px] xl:h-[500px] 2xl:h-[600px]"
          />
          <img
            src="/Line.jpg"
            className="mx-8 mb-2 mt-8 h-[1px] w-full lg:h-[400px] lg:w-[1px] xl:mx-16 xl:h-[500px] 2xl:h-[600px]"
          />
          <div className="text-center font-serif lg:my-auto">
            <p className="pb-8  text-5xl text-yellow-500"></p>
            <h3 className="mb-8 text-lg md:text-xl xl:text-2xl 2xl:text-3xl">
              Mir ist das wirklichkeitsgetreue und spontane Festhalten von
              persönlichen Momenten wichtig. Dafür lege ich großen Wert auf die
              Details und Emotionen, denn diese machen eure Bilder zu etwas
              Einzigartigem. Mein Fokus liegt auf der Reportagefotografie.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomentsNEW;
