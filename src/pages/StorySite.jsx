import React from "react";
import { useParams } from "react-router-dom";
import stories from "../data/stories";
import Navbar from "../components/Navbar";
import HeaderStory from "../components/HeaderStory";
import { PhotoAlbum } from "react-photo-album";

const StorySite = () => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));
  const storyImages = story?.images || [];

  // Bereiten Sie die Bilddaten für das PhotoAlbum vor
  const photos = storyImages.map((image, index) => ({
    src: image.imageUrl,
    alt: `Bild ${index + 1}`,
    width: image.width, // Stellen Sie sicher, dass diese Werte korrekt sind
    height: image.height, // Stellen Sie sicher, dass diese Werte korrekt sind
  }));

  return (
    <>
      <div className="relative">
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
                if (containerWidth < 400) return 1;
                if (containerWidth < 1000) return 2;
                return 3;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySite;
