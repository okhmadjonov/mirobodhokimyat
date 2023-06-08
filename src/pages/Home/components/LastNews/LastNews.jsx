import React from "react";
import "./LastNews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  arrowRight,
  chevronDownImg,
  slide1,
  slide10,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slideCalendar,
  slideEye,
} from "../../../../assets/img/Home";
import { Navigation } from "swiper";

function LastNews() {
  const slideData = [
    {
      id: 1,
      name: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      img: slide1,
    },
    {
      id: 2,
      name: "С 1 марта ID-карта заменит несколько документов для водителей",
      img: slide2,
    },
    {
      id: 3,
      name: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      img: slide3,
    },
    {
      id: 4,
      name: "С 1 марта ID-карта заменит несколько документов для водителей",
      img: slide4,
    },
    {
      id: 5,
      name: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      img: slide5,
    },
    {
      id: 6,
      name: "С 1 марта ID-карта заменит несколько документов для водителей",
      img: slide6,
    },
    {
      id: 7,
      name: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
      img: slide7,
    },
    {
      id: 8,
      name: "С 1 марта ID-карта заменит несколько документов для водителей",
      img: slide8,
    },
    {
      id: 9,
      name: "В следующем году планируют построить 22 новых массива «Янги Узбекистон»",
      img: slide9,
    },
    {
      id: 10,
      name: "В следующем году планируют построить 22 новых массива «Янги Узбекистон»",
      img: slide10,
    },
  ];
  return (
    <div className="last_news ">
      <div className="container">
        <div className="last_news_title">
          <h1>Последные новости</h1>
          <p>
            Все новости <img src={arrowRight} alt="arrow" />
          </p>
        </div>
        <div className="last_news_content">
          <div className="slider">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={30}
              navigation={{
                nextEl: ".button-next-news",
                prevEl: ".button-prev-news",
              }}
              style={{ overflow: "initial" }}
            >
              {slideData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="slider_item">
                    <img src={card.img} alt="" />
                    <div className="info">
                      <div className="info_item">
                        <img src={slideCalendar} alt="" />
                        <span>01.11.2021</span>
                      </div>
                      <div className="info_item">
                        <img src={slideEye} alt="" />
                        <span>2160</span>
                      </div>
                    </div>
                    <p>{card.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="navigate_buttons">
            <img className="button-prev-news" src={chevronDownImg} alt="" />

            <img className="button-next-news" src={chevronDownImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastNews;
