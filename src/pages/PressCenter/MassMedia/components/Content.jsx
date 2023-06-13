import React from "react";
import "./Content.scss";
import {
  bigImg,
  eye,
  calendar,
} from "../../../../assets/img/PressCenter/index";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Content = () => {
  const data = [
    {
      id: 1,
      title:
        "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      date: "01.11.2021",
      view: 252,
    },
    {
      id: 2,
      title:
        "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      date: "01.11.2021",
      view: 252,
    },
    {
      id: 3,
      title:
        "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      date: "01.11.2021",
      view: 252,
    },
    {
      id: 4,
      title:
        "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      date: "01.11.2021",
      view: 252,
    },
    {
      id: 5,
      title:
        "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      date: "01.11.2021",
      view: 252,
    },
    {
      id: 6,
      title:
        "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      date: "01.11.2021",
      view: 252,
    },
  ];

  return (
    <div className="massmedia__content">
      <div className="massmedia__content__header">
        <h3>СМИ о нас</h3>
      </div>
      <div className="massmedia__content__body">
        <div className="video__news">
          <div className="video__cards">
            <div className="card">
              <div className="card__video">
                <iframe
                  style={{
                    borderRadius: "12px",
                  }}
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/FjGTtkWT_Pw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write;
                   encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card__title">
                <p>Прототип нового сервиса — это как далёкий барабанный бой</p>
              </div>
            </div>
            <div className="card">
              <div className="card__video">
                <iframe
                  style={{
                    borderRadius: "12px",
                  }}
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/FkUXn5bOwzk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card__title">
                <p>Может показаться странным, но кровь стынет в жилах</p>
              </div>
            </div>
            <div className="card">
              <div className="card__video">
                <iframe
                  style={{
                    borderRadius: "12px",
                  }}
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/a3Ls3epVu9I"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card__title">
                <p>Мелочь, а приятно: частокол на границе починят</p>
              </div>
            </div>
            <div className="card">
              <div className="card__video">
                <iframe
                  style={{
                    borderRadius: "12px",
                  }}
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/FjGTtkWT_Pw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write;
                   encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card__title">
                <p>Прототип нового сервиса — это как далёкий барабанный бой</p>
              </div>
            </div>
            <div className="card">
              <div className="card__video">
                <iframe
                  style={{
                    borderRadius: "12px",
                  }}
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/FkUXn5bOwzk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card__title">
                <p>Может показаться странным, но кровь стынет в жилах</p>
              </div>
            </div>
            <div className="card">
              <div className="card__video">
                <iframe
                  style={{
                    borderRadius: "12px",
                  }}
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/a3Ls3epVu9I"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card__title">
                <p>Мелочь, а приятно: частокол на границе починят</p>
              </div>
            </div>
            <div className="card">
              <div className="card__video">
                <iframe
                  style={{
                    borderRadius: "12px",
                  }}
                  width="100%"
                  height="280"
                  src="https://www.youtube.com/embed/BETvlPU-mWA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="card__title">
                <p>
                  Высококачественный прототип будущего проекта ни к чему
                  нас не обязывает
                </p>
              </div>
            </div>
          </div>

          <div className="slider__scroller">
            <div className="scoll__item">
              <BsChevronLeft />
            </div>
            <div className="scoll__item active">1</div>
            <div className="scoll__item">2</div>
            <div className="scoll__item">3</div>
            <div className="scoll__item">4</div>
            <div className="scoll__item">5</div>
            <div className="scoll__item">
              <BsChevronRight />
            </div>
          </div>
        </div>
        <div className="other__news">
          <div className="lastNews__right">
            <h3 className="lastNews__right__title">Другие новости</h3>

            {data.map((item) => (
              <div className="lastNews__right__card" key={item.id}>
                <p className="lastNews__right__card__desc">{item.title}</p>
                <div className="lastNews__right__card__about">
                  <div className="lastNews__right__card__about__inside">
                    <img src={calendar} alt="" />
                    <p>{item.date}</p>
                  </div>
                  <div className="lastNews__right__card__about__inside">
                    <img src={eye} alt="" />
                    <p>{item.view}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="massmedia__content__footer"></div>
    </div>
  );
};

export default Content;
