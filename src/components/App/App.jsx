import About from '../../pages/AboutSection/AboutHokimyat/AboutHokimyat';
import Management from '../../pages/AboutSection/Management/Management';
import Deputy from '../../pages/AdviceSection/Deputy/Deputy';
import DeputySPA from '../../pages/AdviceSection/DeputySPA/DeputySPA';
import Documents from '../../pages/AdviceSection/Documents/Documents';
import Hakim from '../../pages/AdviceSection/Hakim/Hakim';
import Home from '../../pages/Home/Home';
import LastNews from '../../pages/PressCenter/LastNews/LastNews';
import News from '../../pages/PressCenter/News/News';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/management" element={<Management />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} /> */}
          <Route path='/deputy' element={<LastNews />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
