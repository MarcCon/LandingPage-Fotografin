import React from "react";
import StoryGrid from "../components/StoryGrid";

import Footer from "../components/Footer";
import HeaderHomePage from "../components/HeaderHomePage";
import Navbar from "../components/Navbar";
import ScrollTopButton from "../components/ScrollTopButton";
import Service from "../components/Service";
import PersonalNEW from "../components/PersonalNEW";
import MomentsNEW from "../components/MomentsNEW";

const Homepage = () => {
  return (
    <>
      <HeaderHomePage />
      <Navbar />
      <PersonalNEW />
      <MomentsNEW />
      <Service />
      <StoryGrid />
      <ScrollTopButton />

      <Footer />
    </>
  );
};

export default Homepage;
