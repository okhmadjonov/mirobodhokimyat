import React from "react";
import "./Division.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Content from "./components/Content";
const Division = () => {
  return (
    <div className="division">
      <div className="container">
        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Division;
