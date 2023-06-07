import About from "../../pages/AboutSection/AboutHokimyat/AboutHokimyat";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
