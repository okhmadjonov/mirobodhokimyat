import { NavLink } from "react-router-dom";
import { chevronLeftGray } from "../../../assets/img/AreaSection";
import Content from "./components/Content";
import UsefullLinks from "../../../components/UsefullLinks/UsefullLinks";

function MapMirobot() {
  return (
    <div className="map_mirobot container">
      <div className="route_back">
        <NavLink to={"/"}>Главный</NavLink>
        <img src={chevronLeftGray} alt="" />
        <p>Карта Мирабадского района</p>
      </div>
      <Content />
      <UsefullLinks />
    </div>
  );
}

export default MapMirobot;
