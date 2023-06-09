import React from "react";
import "./Footer.scss";
import twitter from "../../assets/img/twitter.png";
import insta from "../../assets/img/insta.png";
import facebook from "../../assets/img/facebook.png";
import whatsapp from "../../assets/img/whatsapp.png";
import resource from "../../assets/img/resource.png";
import emblem from "../../assets/img/emblem.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__container container">
          <div className="footer_top-inner">
            <div className="footer__top__menu-title">
              <Link className="menu-title">О Хокимяте</Link>
              <Link className="menu-title">Пресс-центр</Link>
              <Link className="menu-title">Деятельность</Link>
              <Link className="menu-title">Район</Link>
            </div>
            <div className="footer__top__menu-content">
              <div className="menu-content">
                <Link className="menu__link">О Хокимяте</Link>
                <Link className="menu__link">Руководство</Link>
                <Link className="menu__link">Цели, задачи и функции</Link>
                <Link className="menu__link">Подразделения</Link>
                <Link className="menu__link">Вакансии</Link>
                <Link className="menu__link">Виртуальная приемная</Link>
              </div>
              <div className="menu-content">
                <Link className="menu__link"> Новости</Link>
                <Link className="menu__link">Обьявления</Link>
                <Link className="menu__link">Благоустройство района</Link>
                <Link className="menu__link">Выступление Руководства</Link>
                <Link className="menu__link">СМИ о нас</Link>
                <Link className="menu__link">Статистика обращений</Link>
                <Link className="menu__link">Открытые данные </Link>
                <Link className="menu__link">Пресс-релизы</Link>
                <Link className="menu__link">Фотогалерея</Link>
                <Link className="menu__link">Видеогалерея</Link>
              </div>

              <div className="menu-content">
                <Link className="menu__link"> Стратегия действий</Link>
                <Link className="menu__link">Проекты</Link>
                <Link className="menu__link">Тендеры</Link>
                <Link className="menu__link">
                  Международные проекты и программы
                </Link>
                <Link className="menu__link">Обшественный совет</Link>
                <Link className="menu__link">Статические данные</Link>
              </div>
              <div className="menu-content">
                <Link className="menu__link"> Общая информация</Link>
                <Link className="menu__link">Интересные места</Link>
                <Link className="menu__link">Карта района</Link>
                <Link className="menu__link">Парки и зоны отдыха</Link>
                <Link className="menu__link">Для граждан</Link>
                <Link className="menu__link">Для бизнеса</Link>
                <Link className="menu__link">Для туристов</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__middle">
        <div className="footer__container container">
          <div className="middle_logo__developer">
            <div className="footer__logo_title">
              <div className="footer__emblem">
                <img src={emblem} alt="Emblem" />
              </div>
              <div className="footer__title">
                Хокимият Мирабадского района города Ташкента
              </div>
            </div>
            <div className="resource">
              <img src={resource} alt="Resource" />
            </div>
          </div>
          <div className="social__links">
            <Link className="twitter">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link className="facebook">
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link className="insta">
              <img src={insta} alt="Insta" />
            </Link>
            <Link className="whatsapp">
              <img src={whatsapp} alt="Whatsapp" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__container container">
          <p>© Toshkent shahar Mirobod Hokimyati 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
