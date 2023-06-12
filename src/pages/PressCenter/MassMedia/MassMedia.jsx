import React from "react";
import "./MassMedia.scss";
import Content from "./components/Content";
import { BsChevronRight } from "react-icons/bs";
const MassMedia = () => {
  return (
    <div className="massmedia">
      <div className="container">
        <div className="massmedia__url">
          <p>Главный</p>
          <BsChevronRight />
          <p>СМИ о нас</p>
        </div>
        <Content />
      </div>
    </div>
  );
};

export default MassMedia;
