import React from "react";
import StoryGrid from "../components/StoryGrid";
import Carousel from "../components/Carousel";
import Personal from "../components/Personal";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import HeaderHomePage from "../components/HeaderHomePage";
import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";

const Homepage = () => {
  return (
    <>
      <div className="relative">
        <HeaderHomePage />
        <div className="absolute left-0 top-0 w-full">
          {" "}
          {/* Navbar über dem Header */}
          <Navbar />
        </div>
      </div>
      <Personal />
      <ScrollTopButton />
      <Carousel />
      <Divider />
      <StoryGrid />
      <Footer />
    </>
  );
};

export default Homepage;
