import React, { useState } from "react";
import { useParams } from "react-router-dom";
import stories from "../data/stories";
import HeaderStory from "../components/HeaderStory";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Importiere den CSS-Stil
import LegalFooter from "../components/LegalFooter";

const StorySite = () => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));
  const storyImages = story?.images || [];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = storyImages.map((image, index) => ({
    src: image.imageUrl,
    alt: `Bild ${index + 1}`,
    width: image.width,
    height: image.height,
  }));

  // Bereite die Slides für die Lightbox vor
  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
  }));

  return (
    <>
      <HeaderStory />

      <div>
        <h1 className="flex justify-center pt-16 font-serif text-3xl sm:text-5xl">
          {story.description}
        </h1>
        <h2 className="flex justify-center pt-4 text-center font-serif text-xl sm:text-3xl">
          {story.sentence}
        </h2>
        <div className="mx-8 xl:mx-20 2xl:mx-32">
          <div className="mt-16">
            <PhotoAlbum
              layout="masonry"
              photos={photos}
              spacing={6}
              columns={(containerWidth) => {
                if (containerWidth < 600) return 2;
                if (containerWidth < 1000) return 3;
                return 4;
              }}
              renderPhoto={({ photo, index }) => (
                <div
                  className="mb-2 cursor-pointer"
                  onClick={() => {
                    setLightboxOpen(true);
                    setCurrentSlide(index);
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              )}
            />
            {lightboxOpen && (
              <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={slides}
                currentIndex={currentSlide}
                // Optional: Konfiguration für die Navigation
                onNext={() =>
                  setCurrentSlide((currentSlide + 1) % slides.length)
                }
                onPrev={() =>
                  setCurrentSlide(
                    (currentSlide - 1 + slides.length) % slides.length,
                  )
                }
              />
            )}
          </div>
        </div>
      </div>
      <LegalFooter />
    </>
  );
};

export default StorySite;
