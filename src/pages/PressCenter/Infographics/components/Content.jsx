import React from "react";
import "./Content.scss";
import { BsChevronRight } from "react-icons/bs";
const Content = () => {
  const data = [
    {
      id: "1",
      imgUrl: "https://i.ibb.co/xJp7qX3/info1.png",
    },
    {
      id: "2",
      imgUrl: "https://i.ibb.co/GPKxn3h/info2.png",
    },
    {
      id: "3",
      imgUrl: "https://i.ibb.co/WH4THyw/info3.png",
    },
    {
      id: "4",
      imgUrl: "https://i.ibb.co/Fx09CNk/info4.png",
    },
    {
      id: "5",
      imgUrl: "https://i.ibb.co/Zfby87j/info5.png",
    },
    {
      id: "6",
      imgUrl: "https://i.ibb.co/VBKbm2p/info6.png",
    },
    {
      id: "7",
      imgUrl: "https://i.ibb.co/z5y7Zn0/info7.png",
    },
    {
      id: "8",
      imgUrl: "https://i.ibb.co/H7nXzMB/info8.png",
    },
    {
      id: "9",
      imgUrl: "https://i.ibb.co/6BJpQfQ/info9.png",
    },
    {
      id: "10",
      imgUrl: "https://i.ibb.co/sK9fPvp/info10.png",
    },
  ];

  return (
    <div className="infographics__container">
      <div className="infographics_title">
        <p>Главный</p>
        <BsChevronRight />
        <p>Инфографика</p>
      </div>
      <div className="infographics__content__title">Инфографика</div>
      <div className="infographics__content">
        {data.map((item, index) => (
          <div
            className="content__card"
            key={item.id}
            style={{ backgroundImage: `url(${item.imgUrl})` }}></div>
        ))}
      </div>
    </div>
  );
};

export default Content;
