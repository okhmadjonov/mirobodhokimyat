import React from "react";
import "./Content.scss";
import { BsChevronRight, BsTelephone } from "react-icons/bs";
import divisionData from "./divisionData";
const Content = () => {
  return (
    <div className="division__container">
      <div className="division__url">
        <p>Главный</p>
        <BsChevronRight />
        <p>Подразделения</p>
      </div>
      <div className="division__title">
        <h3>Подразделения</h3>
      </div>
      <div className="division__content">
        <div className="division__items">
          {divisionData.map((item, index) => (
            <div className="division__item" key={item.id} id={item.id}>
              <div className="item__top">{item.title}</div>
              <div className="item__body">
                <p className="item__role">{item.role}</p>
                <p>{item.name}</p>
                <p>
                  <BsTelephone />
                  {item.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
