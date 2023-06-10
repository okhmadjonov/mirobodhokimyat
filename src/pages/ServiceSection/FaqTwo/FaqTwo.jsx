import React from "react";
import "./FaqTwo.scss";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import satillate from "../../../assets/img/satillete.png";
import map from "../../../assets/img/map.png";
import faqtwo__banner from "../../../assets/img/faqtwo__banner.png";
const FaqTwo = () => {
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
            <div className="content__left__card">
              <div className="left__card__inner">
                <div className="card__inner__title">
                  <p>Законы Республики Узбекистан</p>
                  <div className="chevron__btn">
                    <BsChevronDown />
                  </div>
                </div>
                <div className="card__inner__content">
                  <div className="inner__content__item"></div>
                </div>
              </div>
            </div>
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
