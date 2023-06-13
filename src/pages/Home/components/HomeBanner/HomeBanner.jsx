import React from "react";
import "./HomeBanner.scss";
import { homeVideo } from "../../../../assets/img/Home";
const HomeBanner = () => {
  return (
    <div className="homebanner">
      <video src={homeVideo} autoPlay loop muted />
      <div className="homebanner__container">
        <div className="container">
          <h1>
            Хокимият Мирабадского района <br /> города Ташкента{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
