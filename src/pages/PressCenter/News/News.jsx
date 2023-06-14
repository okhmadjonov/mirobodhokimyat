import "./News.scss";
import {
  presCenterImg1,
  presCenterImg2,
  presCenterImg3,
  presCenterImg4,
  calendar,
  eye,
  newsPaper,
  chat,
} from "../../../assets/img/PressCenter/index";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const News = () => {
  const data = [
    {
      id: 1,
      img: presCenterImg1,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 2,
      img: presCenterImg2,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 3,
      img: presCenterImg3,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },

    {
      id: 4,
      img: presCenterImg1,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 5,
      img: presCenterImg2,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 6,
      img: presCenterImg3,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 7,
      img: presCenterImg4,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 8,
      img: presCenterImg3,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 9,
      img: presCenterImg4,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
    {
      id: 10,
      img: presCenterImg4,
      date: "01.11.2021",
      view: 2160,
      desc: "Узбекистан приостанавливает авиасообщение с несколькими странами из-за нового штамма COVID–19",
    },
  ];

  const category = [
    { id: 1, name: "Все новости" },
    { id: 2, name: "Благоустройство района" },
    { id: 3, name: "События" },
    { id: 4, name: "Международные встречи и мероприятия" },
    { id: 5, name: "Новости совета" },
  ];

  const [active, setActive] = useState(false);

  return (
    <section className="container">
      <h2 className="news__title">Все новости</h2>
      <div className="news container">
        <div className="news__left">
          {data.map((item) => (
            <NavLink to={`/press_center/news/${item.id}`} key={item.id}>
              <div className="news__left__card">
                <div className="card__img">
                  <img src={item.img} alt="" />
                </div>
                <div className="card__text">
                  <div className="card__text__about">
                    <div className="card__text__about__inside">
                      <img src={calendar} alt="" />
                      <p>{item.date}</p>
                    </div>
                    <div className="card__text__about__inside">
                      <img src={eye} alt="" />
                      <p>{item.view}</p>
                    </div>
                  </div>
                  <p className="card__text__title">{item.desc}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="news__right">
          <div className="news__category">
            <h3 className="news__category__title">Категория новостей</h3>
            <ul className="news__category__inside">
              {category.map((item) => (
                <li
                  className={`${active === item.id ? "active" : false}`}
                  onClick={() => setActive(item.id)}
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="news__document">
            <img src={newsPaper} alt="" />
            <p>Нормативно-правовые документы</p>
          </div>
          <div className="news__services">
            <img src={chat} alt="" />
            <p>Инерактивные услуги</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
