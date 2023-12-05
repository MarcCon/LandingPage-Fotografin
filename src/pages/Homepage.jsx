import React from "react";
import StoryGrid from "../components/StoryGrid";
import Carousel from "../components/Carousel";

import Personal from "../components/Personal";

const Homepage = () => {
  return (
    <>
      <Personal />
      <Carousel />;
      <StoryGrid />;
    </>
  );
};

export default Homepage;
