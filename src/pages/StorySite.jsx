import React from "react";
import { useParams } from "react-router-dom";
import stories from "../data/stories";
import Navbar from "../components/Navbar";
import HeaderStory from "../components/HeaderStory";
import { PhotoAlbum } from "react-photo-album";
import ModalImage from "react-modal-image";

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
      <div>
        <HeaderStory />
        <div className="absolute left-0 top-0 w-full">
          <Navbar />
        </div>
      </div>

      <div>
        <div className="mt-16 flex justify-center font-serif text-5xl">
          <h1>{story.description}</h1>
        </div>
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
                // Hinzufügen von mb-4 für den vertikalen Abstand und m-2 für den horizontalen Abstand
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
    </>
  );
};

export default StorySite;
