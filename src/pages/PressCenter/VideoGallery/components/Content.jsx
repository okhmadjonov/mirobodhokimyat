import React from "react";
import { arrowRight } from "../../../../assets/img/Home";
import "./Content.scss";
import { NavLink } from "react-router-dom";
import { chevronLeftGray } from "../../../../assets/img/AreaSection";
function Content() {
  return (
    <div className="container">
      <div className="route_back">
        <NavLink to={"/"}>Главный</NavLink>
        <img src={chevronLeftGray} alt="" />
        <p>Видеогалерея</p>
      </div>
      <div className="video_gallery ">
        <div className="video_gallery_title">
          <h1>Видеогалерея</h1>
        </div>
        <div className="video_gallery_content">
          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/rp9B_4QqB3s"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>{" "}
          </div>

          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/Q1sZqVaeM6c"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/8Fic5Wg7lfo"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/LmRBNGlaVVw"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/rp9B_4QqB3s"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>{" "}
          </div>

          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/Q1sZqVaeM6c"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/8Fic5Wg7lfo"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
          <div className="item">
            <iframe
              className="video"
              loading="lazy"
              src="https://www.youtube-nocookie.com/embed/LmRBNGlaVVw"
              title="YouTube-video-player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
