import React, { useEffect, useState } from "react";
import Bounce from "react-reveal/Bounce";
import SectionHeader from "./SectionHeader";
import "../styles/section.scss";
import { client } from "../client/Client";

const Section = () => {
  const [bioDescription, setBioDescription] = useState();

  useEffect(() => {
    const getBio = async () => {
      await client.get("about-me").then((res) => {
        if (res.data.name.length > 0) {
          setBioDescription(res.data.description);
        }
      });
    };

    getBio();
  }, [bioDescription]);

  return (
    <>
      <div className="section-container" id="about">
        <Bounce>
          <SectionHeader title="About Me" />
          <div className="section-content">
            <p className="aboutme-text">{bioDescription}</p>
          </div>
        </Bounce>
      </div>
    </>
  );
};

export default Section;
