import React from "react";
import "./AboutHokimyat.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Content from "./components/Content";
const About = () => {
  return (
    <div className="about">
      <div className="about__inner container">
        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default About;
