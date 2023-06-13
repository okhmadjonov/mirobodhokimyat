import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./PhotoGallery.scss";
import {
  arrowRight,
  photoGalerySlide1,
  photoGalerySlide2,
  photoGalerySlide3,
  photoGalerySlide4,
  photoGalerySlide5,
  photoGalerySlide6,
  photoGalerySlide7,
} from "../../../../assets/img/Home";
import { Autoplay } from "swiper";
function PhotoGallery() {
  const data = [
    photoGalerySlide1,
    photoGalerySlide2,
    photoGalerySlide3,
    photoGalerySlide4,
    photoGalerySlide5,
    photoGalerySlide6,
    photoGalerySlide7,
  ];
  return (
    <div className="photo_gallery">
      <div className="photo_gallery_title container">
        <h1>Фотогалерея</h1>
        <a href="/">
          Посмотреть Все <img src={arrowRight} alt="" />
        </a>
      </div>
      <div className="photo_gallery_content">
        <div className="sliders_item">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={20}
            speed={2500 * 3}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              reverseDirection: false,
              pauseOnMouseEnter: true,
            }}
          >
            {data.map((img) => (
              <SwiperSlide key={img}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="sliders_item">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            speed={2500 * 3}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
          >
            {data.map((img) => (
              <SwiperSlide key={img}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
