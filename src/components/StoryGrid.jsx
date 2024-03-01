import React from "react";
import stories from "../data/stories";
import Story from "./StorySeperatly";

const StoryGrid = () => {
  return (
    <div id="AnkerPortfolio" className="container mx-auto w-[85%] pt-12">
      <h2 className="text-center font-serif text-3xl font-light text-yellow-600">
        Meine Zeitreise
      </h2>
      <h3 className="mb-8 text-center font-serif text-4xl font-light md:text-5xl">
        Die letzten Storys
      </h3>
      <div className="grid grid-cols-2 gap-8 pb-16 lg:grid-cols-3 xl:mx-32 2xl:mx-44">
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
