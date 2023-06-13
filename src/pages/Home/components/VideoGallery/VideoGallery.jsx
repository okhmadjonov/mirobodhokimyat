import React from "react";
import { arrowRight } from "../../../../assets/img/Home";
import "./VideoGallery.scss";
function VideoGallery() {
  return (
    <div className="video_gallery container">
      <div className="video_gallery_title">
        <h1>Видеогалерея</h1>
        <a href="/">
          Посмотреть Все <img src={arrowRight} alt="" />
        </a>
      </div>
      <div className="video_gallery_content">
        <div className="item">
          <iframe
            className="video"
            loading="lazy"
            src="https://www.youtube-nocookie.com/embed/rp9B_4QqB3s"
            title="YouTube-video-player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>{" "}
        </div>

        <div className="item">
          <iframe
            className="video"
            loading="lazy"
            src="https://www.youtube-nocookie.com/embed/Q1sZqVaeM6c"
            title="YouTube-video-player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="item">
          <iframe
            className="video"
            loading="lazy"
            src="https://www.youtube-nocookie.com/embed/8Fic5Wg7lfo"
            title="YouTube-video-player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="item">
          <iframe
            className="video"
            loading="lazy"
            src="https://www.youtube-nocookie.com/embed/LmRBNGlaVVw"
            title="YouTube-video-player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;
