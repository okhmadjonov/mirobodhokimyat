import React, { useState } from "react";
import "./Contents.scss";
// import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import satillate from "../../../../assets/img/satillete.png";
import map from "../../../../assets/img/map.png";
import newspaper from "../../../../assets/img/newspaper.png";
import { Link } from "react-router-dom";
const Content = () => {
  const data = [
    {
      id: "1",
      title: "Органический трафик так же органично вписывается в наши планы",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
    {
      id: "2",
      title: "Случайный текст похож на печальный плач оппозиции",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
    {
      id: "3",
      title:
        "Независимые СМИ потому и независимы, что объём доходов населения сократился",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
    {
      id: "4",
      title:
        "Главные СМИ предупреждают: был сорван доклад председателя совхоза",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
    {
      id: "5",
      title: "Нет звука приятнее, чем треск разлетающихся скреп",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
    {
      id: "6",
      title:
        "На двадцатом съезде партии прозвучало поразительное заявление: современная методология разработки станет частью наших традиций",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
    {
      id: "7",
      title: "Не следует забывать, что в провинциях ещё есть чем поживиться",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
    {
      id: "8",
      title: "Близость к государственным границам ни к чему нас не обязывает",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium possimus aspernatur alias libero nam perspiciatis hic, perferendis debitis. Ullam!",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (id) => {
    if (id === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <div className="statistics__container">
      <div className="statistics__container__left">
        {data.map((item, index) => (
          <div
            className={`faq__card__block ${isOpen === item.id ? "active" : ""}`}
            onClick={() => handleClick(item.id)}
            key={item.id}>
            <div className="card__inner">
              <div className="stat__faq__card__title">{item.title}</div>
              <div className="stat__faq__card__content">
                {item.subtitle}

                <div className="download__size">
                  <Link className="download">Скачать файл</Link>
                  <p>Размер файла - 2.1 mb</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <br />
        <br />
      </div>
      <div className="statistics__container__right">
        <div className="content__right__card">
          <img src={satillate} alt="Satillate" />
          <p>Все новости Мирабадского района</p>
        </div>
        <div className="content__right__card">
          <img src={newspaper} alt="newspaper" />
          <p>Нормативно-правовые документы</p>
        </div>
        <div className="content__right__card">
          <img src={map} alt="Map" />
          <p>Карта Мирабадского района</p>
        </div>

        <br />
      </div>
    </div>
  );
};

export default Content;
