import React from "react";
import "./Subscription.scss";
import { subscriptionBack } from "../../assets/img/Home";
function Subscription() {
  return (
    <div
      className="subscription"
      style={{ backgroundImage: `url( ${subscriptionBack})` }}
    >
      <div className="container">
        <div className="subscription_title">
          <h1>Подписка на новостей</h1>
          <p>Самое актуальные новости Миробадского Района</p>
        </div>
        <div className="subscription_content">
          <input type="email" placeholder="Электронная почта" />
          <button>Подписаться</button>
        </div>

        <div className="shape-1"></div>
        <div className="shape-2"></div>
      </div>
    </div>
  );
}

export default Subscription;
