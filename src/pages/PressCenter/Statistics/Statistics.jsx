import React from "react";
import "./Statistics.scss";
import { BsChevronRight } from "react-icons/bs";
import stat from "../../../assets/img/statsicon.png";
import Content from "./components/Content";
const Statistics = () => {
  return (
    <div className="statistics">
      <div className="statistics__banner">
        <div className="container">
          <div className="banner__inner">
            <div className="title__url">
              <h3>Статистика </h3>
              <div className="statistics_url">
                <p>Главный</p>
                <BsChevronRight />
                <p>Открытые данные</p>
              </div>
            </div>
            <div className="opensource__stat">
              <img src={stat} alt="FaqTwo" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Content />
      </div>
    </div>
  );
};

export default Statistics;
