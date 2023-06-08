import React from "react";
import { BsChevronRight } from "react-icons/bs";
import twitter from "../../../assets/img/twitter.png";
import facebook from "../../../assets/img/facebook.png";
import insta from "../../../assets/img/insta.png";
import whatsapp from "../../../assets/img/whatsapp.png";
import { LuMapPin } from "react-icons/lu";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import "./Order.scss";

import Content from "./components/Content";
const Order = () => {
  return (
    <div className="order">
      <div className="container">
        <div className="order__url">
          <p>Главный</p>
          <BsChevronRight />
          <p>Порядок приема граждан</p>
        </div>
        <Content />
      </div>
      <div className="order__contact">
        <div className="contact">
          <div className="contact__inner">
            <div className="inner">
              <h3>Контакты</h3>
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
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47977.01011206141!2d69.29647635!3d41.27484705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aae2a839243%3A0x5dff3ea2aec089e1!2sMirabad%20District%2C%20Tashkent!5e0!3m2!1sen!2s!4v1686216462768!5m2!1sen!2s"
            width="100%"
            height="100%"
            title="This is a unique title"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Order;
