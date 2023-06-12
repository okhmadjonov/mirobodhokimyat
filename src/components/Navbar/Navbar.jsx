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
              <img src={gerbImg} alt="" />
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
                  transition
                >
                  <MenuItem>
                    <NavLink> Цели, задачи и функции</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Руководство</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Аппарат</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Порядок приема граждан</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Подразделения</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Вакансии</NavLink>
                  </MenuItem>
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
                  transition
                >
                  <MenuItem>
                    <NavLink>Депутаты районного Кенгаша</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Принятые документы</NavLink>
                  </MenuItem>
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
                  transition
                >
                  <MenuItem>
                    <NavLink>Новости</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink> СМИ о нас</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink> Статистика</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink> Инфографика</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink> Фотогалерея</NavLink>
                  </MenuItem>
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
                  transition
                >
                  <MenuItem>
                    <NavLink> Часто задаемые вопросы</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink> Нормативные документы</NavLink>
                  </MenuItem>
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
                  )}
                >
                  <MenuItem>
                    <NavLink>Общая информация</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Рейтинг района</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Интересная место</NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink>Карта района</NavLink>
                  </MenuItem>
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
