import React from "react";
import StoryGrid from "../components/StoryGrid";
import Carousel from "../components/Carousel";
import Header from "../components/header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Carousel />;
      <StoryGrid />;
    </>
  );
};

export default Homepage;
