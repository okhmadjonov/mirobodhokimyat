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
        <div className="footer__container"></div>
      </div>
      <div className="footer__middle">
        <div className="footer__container">
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
        <div className="footer__container">
          <p>© Toshkent shahar Mirobod Hokimyati 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
