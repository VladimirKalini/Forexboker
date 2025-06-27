// App.jsx
import React, { useLayoutEffect, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Outlet
} 

from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'

import { LoadingProvider, LoadingContext } from './components/LoaderContext';
import Loader from './components/Loader';
import { LangProvider } from './components/LangContext';
import Header from './components/Header';
import Footer from './components/Footer';


import Home from './pages/Home';

import Register from './pages/forms/Register';
import Login from './pages/forms/Login';
import ResetPassword from './pages/forms/ResetPassword';

import News from './pages/analytics/News';
import EconomicCalendar from './pages/analytics/EconomicCalendar';
import Forecasts from './pages/analytics/Forecasts';
import State from './pages/analytics/State';
import Schedule from './pages/analytics/Schedule';

import Forex from './pages/education/Forex';
import Analyz from './pages/education/Analyz';
import FundAnalyz from './pages/education/FundAnalyz';
import Mistake from './pages/education/Mistake';
import GolosariyEdu from './pages/education/GolosariyEdu';
import Psyhology from './pages/education/Psyhology';
import Education from './pages/education/EducationEdu';
import Library from './pages/education/Library';

import Calculator from './pages/market/Calculator';
import Valuta from './pages/market/Valuta';
import Akciy from './pages/market/Akciy';
import EnergyMetal from './pages/market/EnergyMetal';
import Index from './pages/market/Index';
import Pokazately from './pages/market/Pokazately';
import CryptoValuta from './pages/market/CryptoValuta';

import About from './pages/about/About';
import Career from './pages/about/Career';
import Contact from './pages/about/Contact';


const Layout = () => {
  const location = useLocation();
  const { loading, setLoading } = useContext(LoadingContext);

  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname, setLoading]);

 
  if (loading) {
    return <Loader />;
  }

  const hideOn = ['/login', '/register', '/resetpassword'];
  const hideLayout = hideOn.includes(location.pathname.toLowerCase());

  return (
    <>
      {!hideLayout && <Header />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <LangProvider>
        <HelmetProvider> 
          <Routes>
            <Route path="/*" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="resetpassword" element={<ResetPassword />} />

              <Route path="news" element={<News />} />
              <Route path="economiccalendar" element={<EconomicCalendar />} />
              <Route path="forecasts" element={<Forecasts />} />
              <Route path="state" element={<State />} />
              <Route path="schedule" element={<Schedule />} />
              
              <Route path="forex" element={<Forex />} />
              <Route path="analyz" element={<Analyz />} />
              <Route path="fundanalyz" element={<FundAnalyz />} />
              <Route path="mistake" element={<Mistake />} />
              <Route path="golosariyedu" element={<GolosariyEdu />} />
              <Route path="psyhology" element={<Psyhology />} />
              <Route path="educationedu" element={<Education />} />
              <Route path="library" element={<Library />} />
              <Route path="calculator" element={<Calculator />} />
              <Route path="valuta" element={<Valuta />} />
              <Route path="akciy" element={<Akciy />} />
              <Route path="energymetal" element={<EnergyMetal />} /> 
              <Route path="index" element={<Index />} /> 
              <Route path="pokazately" element={<Pokazately />} />
              <Route path="cryptovaluta" element={<CryptoValuta />} />

              <Route path="about" element={<About />} />
              <Route path="career" element={<Career />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
          </HelmetProvider> 
        </LangProvider>
      </BrowserRouter>
    </LoadingProvider>
  );
}
