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
      <div className="container">
        <div className="structure__description">
          <p>Boshqaruv hodimlarning cheklangan umumiy soni - 41 nafar</p>
          <p>
            Qurilish bo’limi 1 ta boshqaruv va 2 ta ishlab chiqazish
            hodimlaridan iborat
          </p>
          <p>
            Texnik va xizmat ko’rsatuvchi xodimlar soni o’rnatilgan me’yorlarga
            muvofiq belgilanadi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
