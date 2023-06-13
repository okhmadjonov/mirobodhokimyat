import React from "react";
import "./Content.scss";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import photo1 from "../../../../assets/img/photogallery/photo1.png";
import photo2 from "../../../../assets/img/photogallery/photo2.png";
import photo3 from "../../../../assets/img/photogallery/photo3.png";
import photo4 from "../../../../assets/img/photogallery/photo4.png";
import photo5 from "../../../../assets/img/photogallery/photo5.png";
import photo6 from "../../../../assets/img/photogallery/photo6.png";
import photo7 from "../../../../assets/img/photogallery/photo7.png";
import photo8 from "../../../../assets/img/photogallery/photo8.png";
import photo9 from "../../../../assets/img/photogallery/photo9.png";
import photo10 from "../../../../assets/img/photogallery/photo10.png";
import photo11 from "../../../../assets/img/photogallery/photo11.png";
import photo12 from "../../../../assets/img/photogallery/photo12.png";
import photo13 from "../../../../assets/img/photogallery/photo13.png";
import photo14 from "../../../../assets/img/photogallery/photo14.png";
const Content = () => {
  return (
    <div className="photogallery__content">
      <div className="photogallery__url">
        <p>Главный</p>
        <BsChevronRight />
        <p>Фотогалерея</p>
      </div>
      <div className="photogallery__title">
        <h3>Фотогалерея</h3>
      </div>
      <div className="photogallery__body">
        <div className="photogallery__body__layerone">
          <div className="layerone__item__left">
            <img src={photo1} alt="Photo" />
          </div>
          <div className="layerone__item__right">
            <div className="layerone__item">
              {" "}
              <img src={photo2} alt="Photo" />
            </div>
            <div className="layerone__item">
              {" "}
              <img src={photo3} alt="Photo" />
            </div>
            <div className="layerone__item">
              {" "}
              <img src={photo4} alt="Photo" />
            </div>
            <div className="layerone__item">
              {" "}
              <img src={photo5} alt="Photo" />
            </div>
          </div>
        </div>
        <div className="photogallery__body__layertwo">
          <div className="layertwo__item__left">
            <div className="layertwo__item">
              {" "}
              <img src={photo6} alt="Photo" />
            </div>
            <div className="layertwo__item">
              {" "}
              <img src={photo7} alt="Photo" />
            </div>
            <div className="layertwo__item">
              {" "}
              <img src={photo8} alt="Photo" />
            </div>
            <div className="layertwo__item">
              {" "}
              <img src={photo9} alt="Photo" />
            </div>
          </div>
          <div className="layertwo__item__right">
            {" "}
            <img src={photo10} alt="Photo" />
          </div>
        </div>
        <div className="photogallery__body__layerthree">
          <div className="layerthree__item">
            {" "}
            <img src={photo11} alt="Photo" />
          </div>
          <div className="layerthree__item">
            {" "}
            <img src={photo12} alt="Photo" />
          </div>
          <div className="layerthree__item">
            {" "}
            <img src={photo13} alt="Photo" />
          </div>
          <div className="layerthree__item">
            {" "}
            <img src={photo14} alt="Photo" />
          </div>
        </div>
      </div>
      <div className="upload__more">
        <Link className="upload__more__btn">
          <BsChevronDown />
          Посмотреть еще
        </Link>
      </div>
    </div>
  );
};
export default Content;
