import About from '../../pages/AboutSection/AboutHokimyat/AboutHokimyat';
import Management from '../../pages/AboutSection/Management/Management';
import Order from '../../pages/AboutSection/Order/Order';
import Structure from '../../pages/AboutSection/Structure/Structure';
import TargetTaskFunction from '../../pages/AboutSection/TargetTaskFunction/TargetTaskFunction';
import Home from '../../pages/Home/Home';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

import Deputy from '../../pages/AdviceSection/Deputy/Deputy';
import DeputySPA from '../../pages/AdviceSection/DeputySPA/DeputySPA';
import Documents from '../../pages/AdviceSection/Documents/Documents';
import Hakim from '../../pages/AdviceSection/Hakim/Hakim';

import LastNews from '../../pages/PressCenter/LastNews/LastNews';
import News from '../../pages/PressCenter/News/News';

import './App.scss';
import Vacancy from '../../pages/AboutSection/Vacancy/Vacancy';
import Contact from '../../pages/AboutSection/Contact/Contact';
import Division from '../../pages/AboutSection/Division/Division';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/management' element={<Management />} />
          <Route path='/targettaskfunction' element={<TargetTaskFunction />} />
          <Route path='/structure' element={<Structure />} />
          <Route path='/order' element={<Order />} />
          <Route path='/vacancy' element={<Vacancy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/division' element={<Division />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} /> */}
          <Route path='/deputy' element={<LastNews />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
