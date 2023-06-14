import React, { useEffect, useState } from "react";
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
  uzbFlag,
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
import { useTranslation } from "react-i18next";
const Navbar = ({ setVoiceTurn, voiceTurn }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [navLang, setNavLang] = useState("ru");
  const chevronIcon =
    location.pathname === "/" ? chevronDownImg : chevronDownDarkImg;

  const language = [
    { id: "ru", name: "Ru", img: ruImg },
    { id: "uz", name: "Uz", img: uzbFlag },
  ];
  const Lang = localStorage.getItem("language");
  useEffect(() => {
    if (!Lang) {
      localStorage.setItem("language", "ru");
    } else {
      setNavLang(Lang);
    }
  }, []);

  const handleChangeLanguage = (lang) => {
    setNavLang(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  return (
    <div className={`${location.pathname === "/" ? "dark" : ""}`}>
      <div className="header ">
        <div className="header_top container">
          <div className="left">
            <NavLink to={"/"}>
              <img className="gerblogo" src={gerbImg} alt="" />
            </NavLink>
            <h4>{t("navbar.title")}</h4>
          </div>
          <div className="right">
            <div className="item">
              <Menu
                menuButton={
                  <MenuButton>
                    {language.map((lang) => (
                      <div className="item" key={lang.id}>
                        {lang.id === navLang ? (
                          <>
                            <img src={lang.img} alt="" />
                            <p>{lang.name}</p>
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                  </MenuButton>
                }
              >
                {language.map((lang) => (
                  <MenuItem key={lang.id}>
                    <h5 onClick={() => handleChangeLanguage(lang.id)}>
                      <img src={lang.img} alt="" /> <span> {lang.name}</span>
                    </h5>
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className="item">
              <img src={location.pathname === "/" ? eyeLight : eye} alt="" />
              <p>{t("navbar.eye")}</p>
            </div>
            <div
              className={`item ${voiceTurn ? "active_voice" : ""}`}
              onClick={() => setVoiceTurn(!voiceTurn)}
            >
              <img
                src={location.pathname === "/" ? volumeImg : volumeImgBlue}
                alt=""
              />
              <p>{t("navbar.voice")}</p>
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
                      {t("navbar.about.title")}
                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition
                >
                  {AboutSection.map((item) => (
                    <MenuItem key={item.id}>
                      <NavLink to={item.path}> {t(item.name)}</NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      {t("navbar.council.title")}

                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition
                >
                  {AdviceSection.map((item) => (
                    <div key={item.id}>
                      {item.name ? (
                        <MenuItem key={item.id}>
                          <NavLink to={item.path}>{t(item.name)}</NavLink>
                        </MenuItem>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      {t("navbar.press_center.title")}

                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition
                >
                  {PressCenterSection.map((item) => (
                    <div key={item.id}>
                      {item.name ? (
                        <MenuItem>
                          <NavLink to={item.path}>{t(item.name)}</NavLink>
                        </MenuItem>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      {t("navbar.service.title")}
                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                  transition
                >
                  {ServiceSection.map((item) => (
                    <MenuItem key={item.id}>
                      <NavLink to={item.path}> {t(item.name)}</NavLink>
                    </MenuItem>
                  ))}
                </Menu>
                <div className="h-line"></div>
                <Menu
                  menuButton={({ open }) => (
                    <MenuButton>
                      {t("navbar.area.title")}

                      <img
                        className={open ? "active" : "noactive"}
                        src={chevronIcon}
                        alt=""
                      />
                    </MenuButton>
                  )}
                >
                  {AreaSection.map((item) => (
                    <div key={item.id}>
                      {item.name ? (
                        <MenuItem key={item.id}>
                          <NavLink to={item.path}>{t(item.name)}</NavLink>
                        </MenuItem>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}

                  <MenuItem>
                    <a href="https://argos.uz/en/indicator">Рейтинг района</a>
                  </MenuItem>
                </Menu>
                <div className="h-line"></div>
                <NavLink to={"/contact"}>
                  <span>{t("navbar.contact")}</span>
                </NavLink>
                <div className="h-line"></div>
                <div className="search">
                  <span>{t("navbar.search")}</span>{" "}
                  <img src={searchImg} alt="" />{" "}
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
