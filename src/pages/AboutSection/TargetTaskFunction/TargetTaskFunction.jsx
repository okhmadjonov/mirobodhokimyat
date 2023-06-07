import React from "react";
import "./TargetTaskFunction.scss";
import Content from "./components/Content";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
const TargetTaskFunction = () => {
  return (
    <div className="targettaskfunction">
      <div className="targettaskfunction__container container">
        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default TargetTaskFunction;
