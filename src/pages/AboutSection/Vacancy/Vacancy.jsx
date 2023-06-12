import React from "react";
import "./Vacancy.scss";
import vacancy__banner from "../../../assets/img/vacancy__banner.png";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import {
  BsArrowRight,
  BsArrowRightShort,
  BsChevronRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";
const Vacancy = () => {
  return (
    <div className="vacancy">
      <div
        className="vacancy__banner"
        style={{ backgroundImage: `url(${vacancy__banner})` }}>
        <div className="container">
          <div className="vacancy__url">
            <p>Главный</p>
            <BsChevronRight />
            <p>Вакансии</p>
          </div>

          <div className="vacancy__banner__content">
            <div className="banner__content">
              <h3>Открытый путь к государственной службе</h3>
              <p>Государственные служащие вакансии единый открытый портал</p>

              <Link to="/" className="find__job__arrow">
                Найти работу <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Vacancy;
