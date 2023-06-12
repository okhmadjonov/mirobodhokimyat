import React, { useState } from "react";
import "./FaqTwo.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import satillate from "../../../assets/img/satillete.png";
import map from "../../../assets/img/map.png";
import faqtwoData from "./components/faqtwoData";
import faqtwo__banner from "../../../assets/img/faqtwo__banner.png";
const FaqTwo = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (id) => {
    if (id === isOpen) {
      setIsOpen(null);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <div className="faqtwo">
      <div className="faqtwo__banner">
        <div className="container">
          <div className="banner__inner">
            <div className="title__url">
              <h3>Нормативные документы</h3>
              <div className="faq_url">
                <p>Главный</p>
                <BsChevronRight />
                <p>Нормативные документы</p>
              </div>
            </div>

            <div className="faqtwo__mark">
              <img src={faqtwo__banner} alt="FaqTwo" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="faqtwo__content__wrapper">
          <div className="faqtwo__content__left">
            {faqtwoData.map((item, index) => (
              <div
                className={`content__left__card ${
                  isOpen === item.id ? "active" : ""
                }`}
                onClick={() => handleClick(item.id)}
                key={item.id}>
                <div className="left__card__inner">
                  <br />
                  <div className="card__inner__title">
                    <p>{item.title}</p>
                    {/* <p>Законы Республики Узбекистан</p> */}
                    <div className="chevron__btn">
                      <BsChevronDown />
                    </div>
                  </div>
                  <div className="card__inner__content">
                    {item.subtitleItems.map((itemChild, index) => (
                      <>
                        <div className="inner__content__item" key={index.id}>
                          <p>{itemChild.content}</p>
                        </div>
                        <br />
                      </>
                    ))}
                    <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="faqtwo__content__right">
            <div className="content__right__card">
              <img src={satillate} alt="Satillate" />
              <p>Все новости Мирабадского района</p>
            </div>
            <div className="content__right__card">
              <img src={map} alt="Map" />
              <p>Карта Мирабадского района</p>
            </div>
          </div>
        </div>

        <UsefullLinks />
      </div>
    </div>
  );
};

export default FaqTwo;
