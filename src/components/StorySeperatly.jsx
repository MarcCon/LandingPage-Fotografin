import React from "react";
import { Link } from "react-router-dom";

const Story = ({ imageUrl, title, description, id }) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="h-[150px] w-full overflow-hidden sm:h-[300px] lg:h-[400px]">
        <Link to={`/seite/${id}`}>
          <img
            src={imageUrl}
            alt={`Geschichte: ${title}`}
            className="h-full w-full cursor-pointer object-cover duration-500 ease-in-out hover:scale-110"
          />
        </Link>
      </div>
      <p className="mb-1 mt-2 text-center font-serif text-sm font-bold text-gray-600 sm:text-lg">
        {title}
      </p>
      <p className="text-center font-serif text-sm text-gray-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
};

export default Story;
