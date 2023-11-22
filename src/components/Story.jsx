import React from "react";

const Story = ({ imageUrl, title, description, id }) => {
  return (
    <div key={id} className="flex flex-col items-center  w-full h-full">
      <div className=" overflow-hidden bg-red-300  flex ">
        {" "}
        <img
          src={imageUrl}
          alt={title}
          className=" mb-4 hover:scale-110  ease-in-out duration-500 cursor-pointer object-cover w-full h-full  "
        />{" "}
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
