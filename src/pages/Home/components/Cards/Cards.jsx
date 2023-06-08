import React from "react";
import {
  SatelliteIcon,
  mapIcon,
  newsPaperIcon,
} from "../../../../assets/img/Home";
import './Cards.scss'
function Cards() {
  const data = [
    { id: 1, name: "Все новости Мирабадского района", img: mapIcon },
    { id: 2, name: "Нормативно-правовые документы", img: newsPaperIcon },
    { id: 3, name: "Карта Мирабадского района", img: SatelliteIcon },
  ];
  return (
    <div className="cards container">
      {data.map((card) => (
        <div className="cards_item" key={card.id}>
          <img src={card.img} alt="" />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
