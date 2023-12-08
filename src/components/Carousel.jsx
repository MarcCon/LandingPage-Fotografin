import { useState, useEffect } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import originalImages from "../data/carouselPics";

const images = [...originalImages, ...originalImages];

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Wechselt das Bild alle 3 Sekunden

    return () => clearInterval(interval); // Bereinigung des Intervals beim Unmount
  }, []);

  // Berechnet den Versatz für die Transformation
  const getTransformOffset = () => {
    let offset = (-currentImage * 100) / 3;
    if (currentImage >= originalImages.length) {
      offset += (100 * originalImages.length) / 3;
    }
    return offset;
  };

  return (
    <div className="bg-background-blue py-32">
      <div className="flex items-center justify-center ">
        <div className="relative w-full overflow-hidden">
          <div
            className="flex h-96 transition duration-500 ease-out"
            style={{
              transform: `translateX(${getTransformOffset()}%)`,
            }}
          >
            {images.map((image, index) => (
              <img key={index} src={image} className="w-full" />
            ))}
          </div>
          <div className="absolute top-0 flex h-full w-full items-center justify-between px-10 text-3xl">
            <button onClick={() => setCurrentImage(currentImage - 1)}>
              <div className="rounded-full bg-white/50 text-slate-700 ">
                <IoIosArrowBack size={50} />
              </div>
            </button>
            <button onClick={() => setCurrentImage(currentImage + 1)}>
              <div className="rounded-full bg-white/50 text-slate-700 ">
                <IoIosArrowForward size={50} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
