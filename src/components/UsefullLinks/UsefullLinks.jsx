import React from "react";
import "./UsefullLinks.scss";
import useData from "./useData";
const UsefullLinks = () => {
  return (
    <div className="usefull__links">
      <div className="usefull__title">Полезные ссылки</div>
      <div className="usefull__content">
        <div className="usefull_items">
          {useData.map((item, index) => (
            <div className="usefull_item" key={index} id={item.id}>
              <div
                className="usefull__item-img"
                style={{
                  backgroundImage: `url(${item.imgUrl})`,
                }}></div>
              <div className="usefull__item-title">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsefullLinks;
