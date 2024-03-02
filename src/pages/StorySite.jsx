import React from "react";
import { useParams } from "react-router-dom";
import stories from "../data/stories";
import HeaderStory from "../components/HeaderStory";
import { PhotoAlbum } from "react-photo-album";
import ModalImage from "react-modal-image";
import LegalFooter from "../components/LegalFooter";

const StorySite = () => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));
  const storyImages = story?.images || [];

  const photos = storyImages.map((image, index) => ({
    src: image.imageUrl,
    alt: `Bild ${index + 1}`,
    width: image.width,
    height: image.height,
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
              columns={(containerWidth) => {
                if (containerWidth < 400) return 2;
                if (containerWidth < 1000) return 2;
                return 3;
              }}
              renderPhoto={({ photo }) => (
                <div className="mb-4">
                  <ModalImage
                    small={photo.src}
                    large={photo.src}
                    alt={photo.alt}
                    hideDownload={true}
                    hideZoom={true}
                    showRotate={false}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <LegalFooter />
    </>
  );
};

export default StorySite;
