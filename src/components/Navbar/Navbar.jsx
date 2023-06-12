import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./Navbar.scss";
import {
  chevronDownDarkImg,
  chevronDownImg,
  eye,
  eyeLight,
  gerbImg,
  ruImg,
  searchImg,
  volumeImg,
  volumeImgBlue,
} from "../../assets/img/Home";
import { NavLink, useLocation } from "react-router-dom";
import {
  AboutSection,
  AdviceSection,
  AreaSection,
  PressCenterSection,
  ServiceSection,
} from "../Routes/Index";
const Navbar = () => {
  const location = useLocation();
  const chevronIcon =
    location.pathname === "/" ? chevronDownImg : chevronDownDarkImg;
  return (
    <div className={`${location.pathname === "/" ? "dark" : ""}`}>
      <div className="header ">
        <div className="header_top container">
          <div className="left">
            <NavLink to={"/"}>
              <img className="gerblogo" src={gerbImg} alt="" />
            </NavLink>
            <h4>
              Хокимият Мирабадского <br /> района города Ташкента
            </h4>
          </div>
          <div className="right">
            <div className="item">
              <img src={ruImg} alt="" />
              <p>RU</p>
            </div>
            <div className="item">
              <img src={location.pathname === "/" ? eyeLight : eye} alt="" />
              <p>Специальные возможности</p>
            </div>
            <div className="item">
              <img
                src={location.pathname === "/" ? volumeImg : volumeImgBlue}
                alt=""
              />
              <p>Читать вслух</p>
            </div>
          </div>
        </div>
        <div className="header_links">
          <div className="container">
            <div className="dropdown_items">
              <div className="item">
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      О хокимяте
                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition>
                  {AboutSection.map((item) => (
                    <MenuItem key={item.id}>
                      <NavLink to={item.path}> {item.name}</NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      Местный кенгаш{" "}
                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition>
                  {AdviceSection.map((item) => (
                    <MenuItem key={item.id}>
                      <NavLink to={item.path}>{item.name}</NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      Пресс центр{" "}
                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition>
                  {PressCenterSection.map((item) => (
                    <MenuItem key={item.id}>
                      <NavLink to={item.path}>{item.name}</NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      Инерактивные услуги{" "}
                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition>
                  {ServiceSection.map((item) => (
                    <MenuItem key={item.id}>
                      <NavLink to={item.path}> {item.name}</NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      Район
                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}>
                  {AreaSection.map((item) => (
                    <MenuItem key={item.id}>
                      <NavLink to={item.path}>{item.name}</NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <NavLink>
                  <span>Контакты</span>
                </NavLink>
                <div className="h-line"></div>
                <div className="search">
                  <span>Поиск</span> <img src={searchImg} alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
