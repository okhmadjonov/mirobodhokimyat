import React, { useState } from "react";
import {
  allMapImage,
  sectorImage1,
  sectorImage2,
  sectorImage3,
  sectorImage4,
} from "../../../../assets/img/AreaSection";
import "./Content.scss";
function Content() {
  const [visibleMab, setVisibleMab] = useState(1);
  const Data = [
    {
      id: 1,
      nav: "Вся карта района",
      title: "Карта Мирабадского района",
      rightInfo: [
        { card: { key: "Площадь", value: "1700 ГА" } },
        { card: { key: "Количество многоэтажных домов", value: "748" } },
        { card: { key: "Кол-во квартир", value: "40 628" } },
        { card: { key: "Количество улиц", value: "402" } },
        { card: { key: "Численность населения", value: "135 821" } },
        { card: { key: "Количество магазинов", value: "434" } },
        { card: { key: "Количество общих приемов пищи", value: "133" } },
      ],
    },
    {
      id: 2,
      nav: "1 - Сектор",
      color: "yellow",
      title: "Список махалей",
      rightInfo: [
        "Файзобод",
        "Корасув",
        "Банокатий",
        "Янги замон",
        "Ок уй",
        "Олтинкул",
        "А. Фитрат",
        "Сарикул",
        "Фуркат",
      ],
    },
    {
      id: 3,
      nav: "2 - Сектор",
      color: "red",
      title: "Список махалей",
      rightInfo: [
        "Банокатий",
        "Ок уй",
        "Файзобод",
        "Корасув",
        "Янги замон",
        "Олтинкул",
        "А. Фитрат",
        "Сарикул",
        "Фуркат",
      ],
    },
    {
      id: 4,
      nav: "3 - Сектор",
      color: "blue",
      title: "Список махалей",
      rightInfo: [
        "Янги замон",
        "Фуркат",
        "Файзобод",
        "Корасув",
        "Олтинкул",
        "А. Фитрат",
        "Ок уй",
        "Банокатий",
        "Сарикул",
      ],
    },
    {
      id: 5,
      nav: "4 - Сектор",
      color: "green",
      title: "Список махалей",
      rightInfo: [
        "Олтинкул",
        "Янги замон",
        "Ок уй",
        "Корасув",
        "А. Фитрат",
        "Фуркат",
        "Банокатий",
        "Файзобод",
        "Сарикул",
      ],
    },
  ];

  let mapImage;
  if (visibleMab === 2) {
    mapImage = sectorImage1;
  } else if (visibleMab === 3) {
    mapImage = sectorImage2;
  } else if (visibleMab === 4) {
    mapImage = sectorImage3;
  } else if (visibleMab === 5) {
    mapImage = sectorImage4;
  } else {
    mapImage = allMapImage;
  }
  return (
    <div>
      <div className="content">
        <div className="left">
          <div className="navigation">
            {Data.map((item) => (
              <div
                className={`item ${item?.id == visibleMab ? "active" : ""}`}
                key={item.id}
                onClick={() => setVisibleMab(item.id)}
              >
                <div className={item?.color}></div>
                {item.nav}
              </div>
            ))}
          </div>
          <img className="map-image" src={mapImage} alt="" />
        </div>

        <div className="right">
          {Data.map((item) => (
            <div className="item">
              {item.id === visibleMab ? (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  {item?.rightInfo?.map((item) => (
                    <div className="item_inner">
                      {item?.card ? (
                        <div className="flex">
                          <span>{item?.card.key}</span>
                          <p>{item?.card.value}</p>
                        </div>
                      ) : (
                        <div className="block">
                          <p>{item}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
