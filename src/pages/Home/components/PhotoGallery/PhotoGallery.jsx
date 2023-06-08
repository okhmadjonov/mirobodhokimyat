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
      <div className="photo_gallery_title">
        <h1>Международные встречи и мероприятия</h1>
        <a href="/">
          Посмотреть Все <img src={arrowRight} alt="" />
        </a>
      </div>
      <div className="photo_gallery_content">
        <Swiper>
          
        </Swiper>
      </div>
    </div>
  );
}

export default PhotoGallery;
