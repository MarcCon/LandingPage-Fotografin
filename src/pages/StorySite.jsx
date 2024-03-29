import React, { useState } from "react";
import { useParams } from "react-router-dom";
import stories from "../data/stories";
import HeaderStory from "../components/HeaderStory";
import { PhotoAlbum } from "react-photo-album";
import LegalFooter from "../components/LegalFooter";

const StorySite = () => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));
  const storyImages = story?.images || [];

  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightboxDisplay] = useState(false);

  const showImage = (imageSrc) => {
    setImageToShow(imageSrc);
    setLightboxDisplay(true);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    const currentIndex = storyImages.findIndex(
      (image) => image.imageUrl === imageToShow,
    );
    const nextIndex = (currentIndex + 1) % storyImages.length;
    setImageToShow(storyImages[nextIndex].imageUrl);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    const currentIndex = storyImages.findIndex(
      (image) => image.imageUrl === imageToShow,
    );
    const prevIndex =
      (currentIndex - 1 + storyImages.length) % storyImages.length;
    setImageToShow(storyImages[prevIndex].imageUrl);
  };

  return (
    <>
      <HeaderStory />
      <div className="mx-8 xl:mx-20 2xl:mx-32">
        <h1 className="flex justify-center pt-16 font-serif text-3xl sm:text-5xl">
          {story.description}
        </h1>
        <h2 className="flex justify-center pt-4 text-center font-serif text-xl sm:text-3xl">
          {story.sentence}
        </h2>
        <div className="mt-16">
          <PhotoAlbum
            layout="masonry"
            photos={storyImages.map((image) => ({
              src: image.imageUrl,
              alt: `Bild`,
              width: image.width,
              height: image.height,
            }))}
            spacing={6}
            columns={(containerWidth) => {
              if (containerWidth < 600) return 2;
              if (containerWidth < 1000) return 3;
              return 4;
            }}
            renderPhoto={({ photo }) => (
              <div
                className="mb-2 cursor-pointer"
                onClick={() => showImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{ display: "block", width: "100%" }}
                />
              </div>
            )}
          />
          {lightboxDisplay && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={hideLightbox}
            >
              <button
                className="absolute left-10 text-5xl text-white"
                onClick={showPrev}
              >
                &#10094;
              </button>
              <img
                src={imageToShow}
                alt="Selected"
                className="max-h-screen max-w-full"
              />
              <button
                className="absolute right-10 text-5xl text-white"
                onClick={showNext}
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      </div>
      <LegalFooter />
    </>
  );
};

export default StorySite;
