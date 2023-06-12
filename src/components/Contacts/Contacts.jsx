import React from "react";
import {
  clockIcon,
  facebookIcon,
  instagramIcon,
  locationIcon,
  mailIcon,
  phoneIcon,
  twitterIcon,
  whatsupIcon,
} from "../../assets/img/Home";
import './Contacts.scss'

function Contacts() {
  return (
    <div className="contacts">
      <div className="left container">
        <h1>Контакты</h1>
        <div className="item">
          <img src={locationIcon} alt="" />
          <p>г.Ташкент, Мирабадский район, ул. Нукусская, дом 18</p>
        </div>
        <div className="item">
          <img src={mailIcon} alt="" />
          <p>mirobod.hokimyati@gmail.com</p>
        </div>
        <div className="item">
          <img src={phoneIcon} alt="" />
          <p>+998 71 200 20 20</p>
        </div>
        <div className="item">
          <img src={clockIcon} alt="" />
          <p>Dushanbadan - jumagacha 8:00 - 18:00</p>
        </div>
        <div className="social-icons">
          <img src={twitterIcon} alt="" />
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={whatsupIcon} alt="" />
        </div>
      </div>
      <div className="right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.577838837075!2d69.28225891542291!3d41.29629147927269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acda8c445d5%3A0x3ba1c2ed0259621c!2sKhokimiyat%20Mirabadskogo%20Rayona%2C%2018%20Nukus%20Street%2C%20Tashkent%20100015!5e0!3m2!1sen!2s!4v1645448093240!5m2!1sen!2s"
          loading="lazy"
          title="google-map"
          class="contacts-map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;
