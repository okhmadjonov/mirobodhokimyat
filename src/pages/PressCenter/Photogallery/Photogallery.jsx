import React from "react";
import "./Photogallery.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Content from "./components/Content";
const Photogallery = () => {
  return (
    <div className="photogallery">
      <div className="container">
        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Photogallery;
