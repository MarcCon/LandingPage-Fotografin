import React from "react";
import { Link } from "react-router-dom";

const Story = ({ imageUrl, title, description, id }) => {
  return (
    <div key={id} className="flex flex-col items-center">
      <div className="flex h-80 overflow-hidden">
        <Link to={`/seite/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="mb-4 h-80 w-80 cursor-pointer object-cover duration-500 ease-in-out hover:scale-110"
          />
        </Link>
      </div>

      <p className="mb-1 text-center font-serif text-lg font-bold text-gray-600">
        {title}
      </p>
      <p className="text-center font-serif text-lg text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default Story;
