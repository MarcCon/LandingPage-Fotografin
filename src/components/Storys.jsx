import React from "react";
import stories from "../data/stories";
import Story from "./Story";

const StoryGrid = () => {
  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-light mb-4 text-center font-serif">
        Die letzten Storys
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {stories.map((story) => (
          <Story
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
