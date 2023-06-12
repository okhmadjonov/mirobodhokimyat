import About from "../../pages/AboutSection/AboutHokimyat/AboutHokimyat";
import Management from "../../pages/AboutSection/Management/Management";
import Order from "../../pages/AboutSection/Order/Order";
import Structure from "../../pages/AboutSection/Structure/Structure";
import TargetTaskFunction from "../../pages/AboutSection/TargetTaskFunction/TargetTaskFunction";
import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import Deputy from "../../pages/AdviceSection/Deputy/Deputy";
import DeputySPA from "../../pages/AdviceSection/DeputySPA/DeputySPA";
import Documents from "../../pages/AdviceSection/Documents/Documents";
import Hakim from "../../pages/AdviceSection/Hakim/Hakim";

import LastNews from "../../pages/PressCenter/LastNews/LastNews";
import News from "../../pages/PressCenter/News/News";

import "./App.scss";
import Vacancy from "../../pages/AboutSection/Vacancy/Vacancy";
import Contact from "../../pages/AboutSection/Contact/Contact";
import Division from "../../pages/AboutSection/Division/Division";
import FaqOne from "../../pages/ServiceSection/FaqOne/FaqOne";
import FaqTwo from "../../pages/ServiceSection/FaqTwo/FaqTwo";
import OpenSource from "../../pages/ServiceSection/OpenSourceOne/OpenSource";
import MassMedia from "../../pages/PressCenter/MassMedia/MassMedia";
import {
  AboutSection,
  AdviceSection,
  AreaSection,
  PressCenterSection,
  ServiceSection,
} from "../Routes/Index";
import Contacts from "../Contacts/Contacts";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />

          {AboutSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={route.element}
              key={route.id}
            />
          ))}
          {AdviceSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={route.element}
              key={route.id}
            />
          ))}
          {ServiceSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={route.element}
              key={route.id}
            />
          ))}
          {AreaSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={route.element}
              key={route.id}
            />
          ))}


{PressCenterSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={route.element}
              key={route.id}
            />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
