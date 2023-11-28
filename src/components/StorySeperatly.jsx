import React from "react";
import { Link } from "react-router-dom";

const Story = ({ imageUrl, title, description, id }) => {
  return (
    <div key={id} className="flex flex-col items-center h-80">
      <div className=" overflow-hidden flex ">
        {" "}
        <Link to={`/seite/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className=" mb-4 hover:scale-110  ease-in-out duration-500 cursor-pointer object-cover h-64 w-80  "
          />
        </Link>{" "}
      </div>

      <p className="text-center text-lg text-gray-600 mb-1 font-bold font-serif">
        {title}
      </p>
      <p className="text-center text-lg text-gray-600 font-serif">
        {description}
      </p>
    </div>
  );
};

export default Story;
