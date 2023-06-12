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



import {
  AboutSection,
  AdviceSection,
  AreaSection,
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
