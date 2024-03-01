import React from "react";
import StoryGrid from "../components/StoryGrid";
import Footer from "../components/Footer";
import HeaderHomePage from "../components/HeaderHomePage";
import ScrollTopButton from "../components/ScrollTopButton";
import Service from "../components/Service";
import About from "../components/About";
import Moments from "../components/Moments";
import LegalFooter from "../components/LegalFooter";

const Homepage = () => {
  return (
    <>
      <HeaderHomePage />
      <About />
      <Moments />
      <Service />
      <StoryGrid />
      <ScrollTopButton />
      <Footer />
      <LegalFooter />
    </>
  );
};

export default Homepage;
