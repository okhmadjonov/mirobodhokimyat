import About from "../../pages/AboutSection/AboutHokimyat/AboutHokimyat";
import Management from "../../pages/AboutSection/Management/Management";
import Home from "../../pages/Home/Home";
import Navbar from "../Navbar/Navbar";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/management" element={<Management />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
