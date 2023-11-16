import React from "react";

const stories = [
  {
    id: 1,
    imageUrl: "src/assets/helene.png",
    title: "Gartenhochzeit in Leipzig",
    description: "Helene & Joshua",
  },
  {
    id: 2,
    imageUrl: "src/assets/roxana.png",
    title: "Hochzeit im Rosenhotel",
    description: "Roxana & Christian",
  },
  {
    id: 3,
    imageUrl: "src/assets/bine.png",
    title: "Hochzeit auf Sardinien",
    description: "Sabine & Steffen",
  },
  {
    id: 4,
    imageUrl: "src/assets/abi.png",
    title: "Abiball 2023",
    description: "Klosterschule Rossleben",
  },
  {
    id: 5,
    imageUrl: "src/assets/abi.png",
    title: "Familienshooting in Leipzig",
    description: "Jana & Martin",
  },
  {
    id: 6,
    imageUrl: "src/assets/party.png",
    title: "Seega-Festival 2023",
    description: "",
  },
  {
    id: 7,
    imageUrl: "src/assets/bine.png",
    title: "Schneehochzeit",
    description: "Jule & Michelle",
  },
  {
    id: 8,
    imageUrl: "src/assets/bine.png",
    title: "Familienshooting",
    description: "Daniela & ?",
  },
  {
    id: 9,
    imageUrl: "src/assets/bine.png",
    title: "Paarshooting am See",
    description: "Nele & Moritz",
  },
];

const StoryGrid = () => {
  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-light mb-4 text-center font-serif">
        Die letzten Storys
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center overflow-hidden w-full h-full"
          >
            <img
              src={story.imageUrl}
              alt={story.title}
              className=" mb-4 hover:scale-105 ease-in-out duration-300 cursor-pointer object-cover"
            />

            <p className="text-center text-lg text-gray-600 mb-1 font-bold font-serif">
              {story.title}
            </p>
            <p className="text-center text-lg text-gray-600 font-serif">
              {story.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryGrid;
