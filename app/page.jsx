import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeGrid from "./components/HomeGrid";
import Feature from "./components/HomeFeature";
import Contact from "./components/Contact";
import About from "./components/About";
import Slider from "./components/Slider";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <HomeGrid />
      <Feature />
      <Contact />
      <Slider />
    </React.Fragment>
  );
};

export default Home;
