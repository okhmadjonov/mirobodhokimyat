import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { arrowRight, meetingsSlider1 } from "../../../../assets/img/Home";
import "./MeetingsSlider.scss";

function MeetingsSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const data = [
    {
      id: 1,
      name: "Правоохранители Узбекистана и Кореи проведут антитеррористические учения",
      parag:
        "Специалисты сил специального назначения Корейского национального агентства полиции прибыли в Узбекистан для участия в первых в истории двустороннего сотрудничества совместных учениях сил специального назначения правоохранительных органов Узбекистана и Южной Кореи, сообщает ИА «Дунё» По итогам ряда проведенных в текущем году двусторонних встреч и переговоров между специалистами правоохранительных органов двух стран, в целях обмена опытом и отработки практических задач антитеррористической направленности сторонами подтверждена готовность к проведению в период с 29 ноября по 5 декабря на территории Узбекистана совместных учений по борьбе с терроризмом.",
      img: meetingsSlider1,
    },
    {
      id: 2,
      name: "Правоохранители Узбекистана и Кореи проведут антитеррористические учения",
      parag:
        "Специалисты сил специального назначения Корейского национального агентства полиции прибыли в Узбекистан для участия в первых в истории двустороннего сотрудничества совместных учениях сил специального назначения правоохранительных органов Узбекистана и Южной Кореи, сообщает ИА «Дунё» По итогам ряда проведенных в текущем году двусторонних встреч и переговоров между специалистами правоохранительных органов двух стран, в целях обмена опытом и отработки практических задач антитеррористической направленности сторонами подтверждена готовность к проведению в период с 29 ноября по 5 декабря на территории Узбекистана совместных учений по борьбе с терроризмом.",
      img: meetingsSlider1,
    },
    {
      id: 3,
      name: "Правоохранители Узбекистана и Кореи проведут антитеррористические учения",
      parag:
        "Специалисты сил специального назначения Корейского национального агентства полиции прибыли в Узбекистан для участия в первых в истории двустороннего сотрудничества совместных учениях сил специального назначения правоохранительных органов Узбекистана и Южной Кореи, сообщает ИА «Дунё» По итогам ряда проведенных в текущем году двусторонних встреч и переговоров между специалистами правоохранительных органов двух стран, в целях обмена опытом и отработки практических задач антитеррористической направленности сторонами подтверждена готовность к проведению в период с 29 ноября по 5 декабря на территории Узбекистана совместных учений по борьбе с терроризмом.",
      img: meetingsSlider1,
    },
    {
      id: 4,
      name: "Правоохранители Узбекистана и Кореи проведут антитеррористические учения",
      parag:
        "Специалисты сил специального назначения Корейского национального агентства полиции прибыли в Узбекистан для участия в первых в истории двустороннего сотрудничества совместных учениях сил специального назначения правоохранительных органов Узбекистана и Южной Кореи, сообщает ИА «Дунё» По итогам ряда проведенных в текущем году двусторонних встреч и переговоров между специалистами правоохранительных органов двух стран, в целях обмена опытом и отработки практических задач антитеррористической направленности сторонами подтверждена готовность к проведению в период с 29 ноября по 5 декабря на территории Узбекистана совместных учений по борьбе с терроризмом.",
      img: meetingsSlider1,
    },
  ];
  return (
    <div className="meetings container">
      <div className="meetings_title">
        <h1>Международные встречи и мероприятия</h1>
      </div>
      <div className="meetings_content">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={pagination}
          spaceBetween={20}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="item">
                <img className="left" src={item.img} alt="" />
                <div className="right">
                  <h1>{item.name}</h1>
                  <p>{item.parag}</p>
                  <a href="/">
                    Читать подробнее <img src={arrowRight} alt="" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MeetingsSlider;
