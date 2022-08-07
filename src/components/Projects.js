import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import Fade from "react-reveal/Fade";
import SectionHeader from "./SectionHeader.js";
import "../styles/projects.scss";
import { client } from "../client/Client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      await client.get("projects").then((res) => {
        res.data.forEach((element) => {
          const item = (
            <Card
              name={element.name}
              description={element.description}
              link={element.link}
            />
          );
          return setProjects((array) => [...array, item]);
        });
      });
    };

    getProjects();
  }, []);

  return (
    <Fade left>
      <div className="projects-container" id="projects">
        <SectionHeader title="Projects" />
        <div className="projects-card-container">{projects}</div>
      </div>
    </Fade>
  );
};

export default Projects;
