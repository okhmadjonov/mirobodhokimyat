import React from "react";
import "./Content.scss";
import { BsChevronDown } from "react-icons/bs";
import satillate from "../../../../assets/img/satillete.png";
import map from "../../../../assets/img/map.png";
import faqoneData from "../../FaqOne/components/faqoneData";
const Content = () => {
  return (
    <div className="faqtwo__content__wrapper">
      <div className="faqtwo__content__left">
        {/* {faqoneData.map((item, index) => ( */}
        <div className="content__left__card">
          <div className="left__card__inner">
            <div className="card__inner__title">
              {/* <p>{item.title}</p> */}
              <div className="chevron__btn">
                <BsChevronDown />
              </div>
            </div>
            <div className="card__inner__content">
              <div className="inner__content__item"></div>
            </div>
          </div>
        </div>
        {/* ))} */}
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
  );
};

export default Content;
