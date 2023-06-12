import React from "react";
import "./Content.scss";
import twitter from "../../../../assets/img/twitter.png";
import facebook from "../../../../assets/img/facebook.png";
import insta from "../../../../assets/img/insta.png";
import whatsapp from "../../../../assets/img/whatsapp.png";
import { LuMapPin } from "react-icons/lu";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import contact__banner__bg from "../../../../assets/img/contact__banner__bg.png";
import map__icon from "../../../../assets/img/map_tik.png";
const Content = () => {
  return (
    <div className="contact__container">
      <div className="contact__url">
        <p>Главный</p>
        <BsChevronRight />
        <p>Контакты</p>
      </div>
      <div className="contact__title">
        <h3>Контакты</h3>
      </div>
      <div
        className="contact__banner"
        style={{ backgroundImage: `url(${contact__banner__bg})` }}>
        <div className="contact__banner__inner">
          <div className="left">
            <div className="left_img">
              <img src={map__icon} alt="Map Icon" />
            </div>
          </div>
          <div className="right">
            <div className="right__inner">
              <div className="contact__details">
                <p>
                  <LuMapPin />
                  г.Ташкент, Мирабадский район, ул. Нукусская, дом 18
                </p>
                <p>
                  <BiEnvelope /> mirobod.hokimyati@gmail.com
                </p>
                <p>
                  <BsTelephone />
                  +998 71 200 20 20
                </p>
                <p>
                  <MdOutlineWatchLater />
                  Dushanbadan - jumagacha 8:00 - 18:00
                </p>
              </div>
              <div className="contact__images">
                <img src={twitter} alt="Twitter" />
                <img src={facebook} alt="Facebook" />
                <img src={insta} alt="Instagram" />
                <img src={whatsapp} alt="Whatsapp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
