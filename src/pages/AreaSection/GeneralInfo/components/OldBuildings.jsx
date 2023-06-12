import React from "react";
import {
  OldBuildingsImage1,
  OldBuildingsImage2,
} from "../../../../assets/img/AreaSection";
import "./OldBuildings.scss";

function OldBuildings() {
  return (
    <div className="old_buildings container">
      <div className="old_buildings_title">
        <h1>
          Сохранился в районе и сейчас <br /> в эксплуатации старинные постройки
        </h1>
      </div>
      <div className="old_buildings_content">
        {/* cards  start */}
        <div className="cards">
          <h1>Мавзолей Койлик Ата был основан в 1475 году</h1>
          <div className="flex">
            <div className="card">
              <img src={OldBuildingsImage1} alt="" />
              <p>Старое состояние</p>
            </div>
            <div className="card">
              <img src={OldBuildingsImage2} alt="" />
              <p>Новая состояние</p>
            </div>
          </div>
        </div>
        {/* cards  end */}

         {/* cards  start */}
         <div className="cards">
          <h1>Мавзолей Койлик Ата был основан в 1475 году</h1>
          <div className="flex">
            <div className="card">
              <img src={OldBuildingsImage1} alt="" />
              <p>Старое состояние</p>
            </div>
            <div className="card">
              <img src={OldBuildingsImage2} alt="" />
              <p>Новая состояние</p>
            </div>
          </div>
        </div>
        {/* cards  end */}

         {/* cards  start */}
         <div className="cards">
          <h1>Мавзолей Койлик Ата был основан в 1475 году</h1>
          <div className="flex">
            <div className="card">
              <img src={OldBuildingsImage1} alt="" />
              <p>Старое состояние</p>
            </div>
            <div className="card">
              <img src={OldBuildingsImage2} alt="" />
              <p>Новая состояние</p>
            </div>
          </div>
        </div>
        {/* cards  end */}

         {/* cards  start */}
         <div className="cards">
          <h1>Мавзолей Койлик Ата был основан в 1475 году</h1>
          <div className="flex">
            <div className="card">
              <img src={OldBuildingsImage1} alt="" />
              <p>Старое состояние</p>
            </div>
            <div className="card">
              <img src={OldBuildingsImage2} alt="" />
              <p>Новая состояние</p>
            </div>
          </div>
        </div>
        {/* cards  end */}

         {/* cards  start */}
         <div className="cards">
          <h1>Мавзолей Койлик Ата был основан в 1475 году</h1>
          <div className="flex">
            <div className="card">
              <img src={OldBuildingsImage1} alt="" />
              <p>Старое состояние</p>
            </div>
            <div className="card">
              <img src={OldBuildingsImage2} alt="" />
              <p>Новая состояние</p>
            </div>
          </div>
        </div>
        {/* cards  end */}
      </div>
    </div>
  );
}

export default OldBuildings;
