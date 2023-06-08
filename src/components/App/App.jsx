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
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/management" element={<Management />} />
          <Route path="/targettaskfunction" element={<TargetTaskFunction />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
