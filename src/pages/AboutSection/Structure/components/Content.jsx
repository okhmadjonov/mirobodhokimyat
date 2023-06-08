import React from "react";
import "./Content.scss";
import structure__img from "../../../../assets/img/structure__map.png";
const Content = () => {
  return (
    <div className="structure__content">
      <div className="container">
        <h3>Структура исполнительной власти Мирабадского района</h3>
      </div>
      <div className="structure__img">
        <img src={structure__img} alt="Structure" />
      </div>
    </div>
  );
};

export default Content;
