import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import stories from "../data/stories";
import Navbar from "../components/Navbar";
import HeaderStory from "../components/HeaderStory";

const StorySite = () => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));
  const storyImages = story?.images || [];

  return (
    <>
      <div className="relative">
        <HeaderStory />
        <div className="absolute left-0 top-0 w-full">
          {/* Navbar über dem Header */}
          <Navbar />
        </div>
      </div>
      <div>
        <div className="mt-16 flex justify-center font-serif text-5xl">
          <h1>{story.description}</h1>
        </div>

        <div className="columns-2 p-64 md:columns-3 lg:columns-3">
          {storyImages.map((image, index) => (
            <div key={index} className="grid gap-4">
              <img
                className="mb-4 h-auto max-w-full rounded-lg"
                src={image.imageUrl}
                alt={`Bild ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StorySite;
