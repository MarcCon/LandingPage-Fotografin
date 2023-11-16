import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const images = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];

export default function Carousel() {
  let [currentImage, setCurrentImage] = useState(0);

  let prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  let nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="overflow-hidden relative w-2/3 h-auto ">
        <div
          className={`flex transition ease-out duration-40`}
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
          }}
        >
          {images.map((s) => {
            return <img src={s} />;
          })}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex px-10 text-3xl">
          <button onClick={prevImage}>
            <BsFillArrowLeftCircleFill style={{ color: "rgb(207,181,59)" }} />
          </button>
          <button onClick={nextImage}>
            <BsFillArrowRightCircleFill style={{ color: "rgb(207,181,59)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
