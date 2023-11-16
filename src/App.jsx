import React from "react";
import Navbar from "./components/Navbar";
import StoryGrid from "./components/Storys";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <StoryGrid />
    </div>
  );
};

export default App;
