import React from "react";
import "./OpenSource.scss";

import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import satillate from "../../../assets/img/satillete.png";
import map from "../../../assets/img/map.png";
import newspaper from "../../../assets/img/newspaper.png";
import opensource__banner from "../../../assets/img/open__source.png";
const OpenSource = () => {
  return (
    <div className="opensource">
      <div className="opensource__banner">
        <div className="container">
          <div className="banner__inner">
            <div className="title__url">
              <h3>Открытые данные</h3>
              <div className="opensource_url">
                <p>Главный</p>
                <BsChevronRight />
                <p>Открытые данные</p>
              </div>
            </div>

            <div className="opensource__mark">
              <img src={opensource__banner} alt="FaqTwo" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="opensource__content__wrapper">
          <div className="opensource__content__left">
            <div className="content__left__card">
              <div className="left__card__inner">
                <div className="card__inner__title">
                  <p>Название открытых данных</p>
                  {/* <div className="chevron__btn">
                    <BsChevronDown />
                  </div> */}
                </div>
                <div className="card__inner__content">
                  <div className="inner__content__item"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="opensource__content__right">
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
          </div>
        </div>

        <UsefullLinks />
      </div>
    </div>
  );
};

export default OpenSource;
