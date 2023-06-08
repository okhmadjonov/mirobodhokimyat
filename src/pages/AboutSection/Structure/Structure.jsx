import React from "react";
import "./Structure.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import { BsChevronRight } from "react-icons/bs";
import Content from "./components/Content";
const Structure = () => {
  return (
    <div className="structure">
      <div className="container">
        <div className="structure__url">
          <p>Главный</p>
          <BsChevronRight />
          <p>Структура</p>
        </div>{" "}
      </div>
      <Content />{" "}
      <div className="container">
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Structure;
