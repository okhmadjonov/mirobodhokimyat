import React from "react";
import { iphone12imgae } from "../../assets/img/Home";
import "./AskQuetion.scss";
function AskQuetion() {
  return (
    <div className="ask_quetion container">
      <img src={iphone12imgae} alt="" />
      <div className="ask_quetion_content">
        <h1>Отправить обращение</h1>
        <p>Если у вас есть вопросы, заходите в наш телеграм бот</p>
        <button>Задать вопрос</button>
      </div>
    </div>
  );
}

export default AskQuetion;
