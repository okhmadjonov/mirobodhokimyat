import React from "react";
import { mapImg } from "../../../../assets/img/Home";
import "./Map.scss";
function Map() {
  return (
    <div className="map">
      <div className="content ">
        <div className="left container">
          <div className="title">
            <h1>Карта Мирабадского района</h1>
          </div>
          <div className="item">
            <p>Площадь</p>
            <span>1700 ГА</span>
          </div>
          <div className="item">
            <p>Количество многоэтажных домов</p>
            <span>748</span>
          </div>
          <div className="item">
            <p>Количество улиц</p>
            <span>40 628</span>
          </div>
          <div className="item">
            <p>Количество</p>
            <span>402</span>
          </div>
          <div className="item">
            <p>Численность населения</p>
            <span>135 821</span>
          </div>
          <div className="item">
            <p>Количество магазинов</p>
            <span>434</span>
          </div>
          <div className="item">
            <p>Количество общих приемов пищи</p>
            <span>133</span>
          </div>
        </div>
        <div className="right">
          <img src={mapImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Map;
