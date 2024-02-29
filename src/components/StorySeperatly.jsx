import React from "react";
import { Link } from "react-router-dom";

const Story = ({ imageUrl, title, description, id }) => {
  return (
    <div key={id} className="flex h-full w-full flex-col items-center">
      <div className=" h-[200px] w-full overflow-hidden sm:h-[300px] md:h-[300px] lg:h-[400px]">
        <Link to={`/seite/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full cursor-pointer object-cover duration-500 ease-in-out hover:scale-110"
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
