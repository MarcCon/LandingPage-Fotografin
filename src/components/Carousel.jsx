import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const originalImages = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];

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
    let offset = -currentImage * 100 / 3;
    if (currentImage >= originalImages.length) {
      offset += 100 * originalImages.length / 3;
    }
    return offset;
  };

  return (
    <div className="bg-background-blue py-32">
      <div className="flex justify-center items-center ">
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition ease-out duration-500"
            style={{
              transform: `translateX(${getTransformOffset()}%)`,
            }}
          >
            {images.map((image, index) => (
              <img key={index} src={image} className="w-1/3" />
            ))}
          </div>
          <div className="absolute top-0 h-full w-full flex justify-between items-center px-10 text-3xl">
            <button onClick={() => setCurrentImage(currentImage - 1)}>
            <IoIosArrowBack color="text-white"/>
            </button>
            <button onClick={() => setCurrentImage(currentImage + 1)}>
            <IoIosArrowForward color="text-white" />

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
