import React from "react";
import "./FaqOne.scss";
import qi_one from "../../../assets/img/qi_one.png";
import qi_two from "../../../assets/img/qi_two.png";
import qi_three from "../../../assets/img/qi_three.png";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";
import { BsChevronRight } from "react-icons/bs";
import Content from "./components/Content";
const FaqOne = () => {
  return (
    <div className="faqone">
      <div className="faqone__banner">
        <div className="container">
          <div className="faq__banner-wrapper">
            <div className="title__url">
              <h3>Часто задавемые вопросы</h3>
              <div className="faq_url">
                <p>Главный</p>
                <BsChevronRight />
                <p>Часто задавемые вопросы</p>
              </div>
            </div>
            <div className="question__mark">
              <div className="qi_one">
                <img src={qi_one} alt="QI_one" />
              </div>
              <div className="qi_two_three">
                <img src={qi_two} alt="QI_two" />
                <img src={qi_three} alt="QI_three" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Content />
        <UsefullLinks />
      </div>
    </div>
  );
};

export default FaqOne;
