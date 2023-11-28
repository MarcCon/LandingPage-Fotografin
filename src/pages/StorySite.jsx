import React from "react";
import { useParams } from "react-router-dom";
import stories from "../data/stories"; // Stellen Sie sicher, dass der Importpfad korrekt ist

const StorySite = () => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));
  const storyImages = story?.images || []; // Zugriff auf das 'images' Array innerhalb des gefundenen Story-Objekts

  return (
    <div>
      <h1>{story.description}</h1>

      <div className="columns-2 md:columns-3 lg:columns-3 p-64">
        {storyImages.map((image, index) => (
          <div key={index} className="grid gap-4">
            <img
              className="h-auto max-w-full rounded-lg mb-4"
              src={image.imageUrl}
              alt={`Bild ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySite;
