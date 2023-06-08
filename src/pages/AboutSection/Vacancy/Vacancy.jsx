import React from "react";
import "./Vacancy.scss";
import vacancy__banner from "../../../assets/img/vacancy__banner.png";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
const Vacancy = () => {
  return (
    <div className="vacancy">
      <div
        className="vacancy__banner"
        style={{ backgroundImage: `url(${vacancy__banner})` }}>
        <div className="container"></div>
      </div>
      <div className="container">
        <UsefullLinks />
      </div>
    </div>
  );
};

export default Vacancy;
