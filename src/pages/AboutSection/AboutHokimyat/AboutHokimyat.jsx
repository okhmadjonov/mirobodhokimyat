import React from "react";
import "./AboutHokimyat.scss";
import Footer from "../../../components/Footer/Footer";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Header from "./Components/Header";

const About = () => {
  return (
    <div className="about">
      <div className="about__inner container">
        <Header />
        <UsefullLinks />
      </div>
      <Footer />
    </div>
  );
};

export default About;
