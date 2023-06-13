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
  PressCenterSection,
  ServiceSection,
} from "../Routes/Index";
import Contacts from "../Contacts/Contacts";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Loader />}>
                <Contacts />
              </Suspense>
            }
          />

          {AboutSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              }
              key={route.id}
            />
          ))}
          {AdviceSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              }
              key={route.id}
            />
          ))}
          {ServiceSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              }
              key={route.id}
            />
          ))}
          {AreaSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              }
              key={route.id}
            />
          ))}

          {PressCenterSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              }
              key={route.id}
            />
          ))}
          {AreaSection.map((route) => (
            <Route
              path={`${route.path}`}
              element={
                <Suspense fallback={<Loader />}>{route.element}</Suspense>
              }
              key={route.id}
            />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
