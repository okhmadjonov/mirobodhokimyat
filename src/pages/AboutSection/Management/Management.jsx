import React from "react";
import "./Management.scss";
import { BsChevronRight } from "react-icons/bs";
const Management = () => {
  return (
    <div className="management">
      <div className="management__container">
        <div className="management__url">
          <p>Главный</p>
          <BsChevronRight />
          <p>Руководство</p>
        </div>
        <div className="management__content">
          <div className="management__content__title">Руководство</div>
          <div className="management__content_left"></div>
          <div className="management__content_right"></div>
        </div>
      </div>
    </div>
  );
};

export default Management;
