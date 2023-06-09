import React, { useState } from "react";
import "./Content.scss";
import { BsChevronDown } from "react-icons/bs";
import faqoneData from "./faqoneData";
import { Link } from "react-router-dom";
import satillate from "../../../../assets/img/satillete.png";
import map from "../../../../assets/img/map.png";
import newspaper from "../../../../assets/img/newspaper.png";
const Content = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (id) => {
    console.log(id);
    if (id === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };
  console.log(isOpen);
  return (
    <div className="faq__content">
      <div className="faq_content_left">
        <div className="faq_items">
          {faqoneData.map((item, index) => (
            <div
              className={`faq_item ${isOpen === item.id ? "active" : ""}`}
              key={item.id}
              id={item.id}
              onClick={() => handleClick(item.id)}>
              <div className="faq_item_top">
                <h3>{item.title}</h3>
                <div className={"faq_btn"}>
                  <BsChevronDown className="shevronDown" />
                </div>
              </div>
              <div className={"faq_content"}>
                <p>
                  <br />
                  {item.subtitle} <br /> <br />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq_content_right">
        <div className="right_card_one">
          <h3>Отправить обращение</h3>
          <p>Если у вас есть вопросы, заходите в наш телеграм бот</p> <br />
          <Link className="ask__question">Задать вопрос</Link>
        </div>
        <div className="right_card_two">
          <img src={satillate} alt="Satillate" />
          <p>Все новости Мирабадского района</p>
        </div>
        <div className="right_card_two">
          <img src={newspaper} alt="NewsPapper" />
          <p>Нормативно-правовые документы</p>
        </div>
        <div className="right_card_two">
          <img src={map} alt="Map" />
          <p>Карта Мирабадского района</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
