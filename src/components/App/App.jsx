import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

import {
  AboutSection,
  AdviceSection,
  AreaSection,
  PressCenterSection,
  ServiceSection,
} from "../Routes/Index";
import { Suspense, lazy, useState } from "react";
import Loader from "../Loader/Loader";
const Contacts = lazy(() => import("../../pages/AboutSection/Contact/Contact"));
function App() {
  const Lang = localStorage.getItem("language");
  const [voiceTurn, setVoiceTurn] = useState(false);
  const handleMouseUp = () => {
    if (voiceTurn) {
      const selectedText = window.getSelection().toString();
      const value = new SpeechSynthesisUtterance(selectedText);
      if (Lang === "uz") {
        value.lang = "uz-UZ";
      } else if (Lang === "ru") {
        value.lang = "ru-RU";
      }
      window.speechSynthesis.speak(value);
      console.log(`Selected text: ${window.getSelection().toString()}`);
    }
  };
  return (
    <div onMouseUp={handleMouseUp}>
      <Navbar setVoiceTurn={setVoiceTurn} voiceTurn={voiceTurn} />
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
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
            key={route.id}
          />
        ))}
        {AdviceSection.map((route) => (
          <Route
            path={`${route.path}`}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
            key={route.id}
          />
        ))}
        {ServiceSection.map((route) => (
          <Route
            path={`${route.path}`}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
            key={route.id}
          />
        ))}
        {AreaSection.map((route) => (
          <Route
            path={`${route.path}`}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
            key={route.id}
          />
        ))}

        {PressCenterSection.map((route) => (
          <Route
            path={`${route.path}`}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
            key={route.id}
          />
        ))}
        {AreaSection.map((route) => (
          <Route
            path={`${route.path}`}
            element={<Suspense fallback={<Loader />}>{route.element}</Suspense>}
            key={route.id}
          />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
