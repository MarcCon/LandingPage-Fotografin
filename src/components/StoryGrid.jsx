import React from "react";
import stories from "../data/stories";
import Story from "./StorySeperatly";

const StoryGrid = () => {
  return (
    <div className="container mx-auto p-12  ">
      <h3
        id="AnkerPortfolio"
        className=" text-center font-serif text-3xl font-light text-yellow-500  "
      >
        Meine Zeitreise
      </h3>
      <h2 className="mb-4 text-center font-serif text-5xl font-light  ">
        Die letzten Storys
      </h2>
      <div className="mx-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  ">
        {stories.map((story) => (
          <Story
            key={story.id}
            imageUrl={story.imageUrl}
            title={story.title}
            description={story.description}
            id={story.id}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryGrid;
