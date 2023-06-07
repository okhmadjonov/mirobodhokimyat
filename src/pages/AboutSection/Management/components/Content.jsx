import React from "react";
import "./Content.scss";
import { BiEnvelope } from "react-icons/bi";
import { SlCallEnd } from "react-icons/sl";
import { RiTimer2Line } from "react-icons/ri";
import manageData from "./manageData";
const Content = () => {
  return (
    <div className="management__content">
      <div className="management__content__title">Руководство</div>

      <div className="management__content__bottom-wrapper">
        <div className="management__content_left">
          {manageData.map((item, index) => (
            <div className="content__left__card" key={item.id} id={item.id}>
              <div className="card">
                <div
                  className="card__img"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
                <div className="card__text">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                  <p>
                    <BiEnvelope className="card__icon" /> {item.email}
                  </p>
                  <p>
                    <SlCallEnd className="card__icon" /> {item.phone}
                  </p>
                  <p>
                    {" "}
                    <RiTimer2Line className="card__icon" />
                    {item.workDays}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="management__content_right">
          <div className="content__right-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Content;
