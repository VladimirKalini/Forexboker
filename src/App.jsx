// App.jsx
import React, { useLayoutEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LoadingProvider, LoadingContext } from './components/LoaderContext';
import Loader from './components/Loader';
import { LangProvider } from './components/LangContext';
import Header from './components/Header';
import Footer from './components/Footer';
import { routes } from './routes';

// 1. Упрощаем Layout. Он больше не должен решать, что скрывать.
// Он просто отображает Header, контент страницы (Outlet) и Footer.
const Layout = () => {
  const location = useLocation();
  const { loading, setLoading } = useContext(LoadingContext);

  useLayoutEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname, setLoading]);

  if (loading) {
    return <Loader />;
  }

  // Логика `hideOn` больше не нужна и удалена.
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default function App() {
  // Фильтруем роуты: отдельно для форм, отдельно для всех остальных.
  const formRoutes = routes.filter(r => r.group === 'forms');
  const mainRoutes = routes.filter(r => r.group !== 'forms');

  return (
    <LoadingProvider>
      <BrowserRouter>
        <LangProvider>
          <HelmetProvider>
            <Routes>
              {/* 2. Маршруты для страниц С Header и Footer */}
              <Route path="/" element={<Layout />}>
                {mainRoutes.map((route) =>
                  route.isIndex ? (
                    <Route key="index" index element={route.element} />
                  ) : (
                    <Route key={route.path} path={route.path} element={route.element} />
                  )
                )}
              </Route>

              {/* 3. Маршруты для страниц БЕЗ Header и Footer */}
              {formRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </HelmetProvider>
        </LangProvider>
      </BrowserRouter>
    </LoadingProvider>
  );
}