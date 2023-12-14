import React from "react";
import { Link } from "react-router-dom";

const Story = ({ imageUrl, title, description, id }) => {
  return (
    <div key={id} className="flex flex-col items-center">
      <div className="flex overflow-hidden sm:h-80">
        <Link to={`/seite/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="mb-4 h-60 w-auto cursor-pointer object-cover duration-500 ease-in-out hover:scale-110 sm:h-80 sm:w-80"
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
