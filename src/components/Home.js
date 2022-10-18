import React from "react";
import Hero from "./Hero.js";
import Section from "./Section.js";
import Projects from "./Projects.js";
import Work from "./Work.js";

const Home = () => {
  return (
    <div id="home">
      <Hero name="Quentin Rankin" job="Software Engineer" />
      <div className="home-container">
        <Section />
        <Work />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
