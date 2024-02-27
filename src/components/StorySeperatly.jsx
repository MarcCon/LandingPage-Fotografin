import React from "react";
import { Link } from "react-router-dom";

const Story = ({ imageUrl, title, description, id }) => {
  return (
    <div key={id} className="flex flex-col items-center">
      <div className="flex h-[200px] overflow-hidden md:h-[300px]">
        <Link to={`/seite/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="mb-4 h-full w-[250px] cursor-pointer object-cover duration-500 ease-in-out hover:scale-110 sm:h-80 sm:w-80"
          />
        </Link>
      </div>

      <p className="mb-1 text-center font-serif text-lg font-bold text-gray-600 sm:mt-2">
        {title}
      </p>
      <p className="text-center font-serif text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default Story;
