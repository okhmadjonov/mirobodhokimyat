import React from "react";
import "./Management.scss";
import { BsChevronRight } from "react-icons/bs";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import Content from "./components/Content";
const Management = () => {
  return (
    <div className="management">
      <div className="management__container container">
        <div className="management__url">
          <p>Главный</p>
          <BsChevronRight />
          <p>Руководство</p>
        </div>

        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Management;
