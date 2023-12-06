import React from "react";
import StoryGrid from "../components/StoryGrid";
import Carousel from "../components/Carousel";

import Personal from "../components/Personal";
import Divider from "../components/Divider";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Personal />
      <Carousel />;
      <Divider />
      <StoryGrid />;
      <Footer />
    </>
  );
};

export default Homepage;
