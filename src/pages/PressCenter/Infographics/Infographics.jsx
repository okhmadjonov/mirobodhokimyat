import React from "react";
import "./Infographics.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Content from "./components/Content";
const Infographics = () => {
  return (
    <div className="infographics">
      <div className="container">
        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Infographics;
