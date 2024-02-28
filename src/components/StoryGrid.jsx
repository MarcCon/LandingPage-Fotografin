import React from "react";
import stories from "../data/stories";
import Story from "./StorySeperatly";

const StoryGrid = () => {
  return (
    <div id="AnkerPortfolio" className="container mx-auto sm:p-12">
      <h3 className="text-center font-serif text-3xl font-light text-yellow-500">
        Meine Zeitreise
      </h3>
      <h2 className="mb-8 text-center font-serif text-4xl font-light md:text-5xl">
        Die letzten Storys
      </h2>
      <div className="mx-4 grid grid-cols-2 gap-8 pb-16 sm:mx-4 sm:grid-cols-2 md:mx-4 lg:mx-4 lg:grid-cols-3 xl:mx-32 xl:gap-8 2xl:mx-44">
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
