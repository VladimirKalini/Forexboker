import React, { createContext, useState, useContext, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../routes'; // Убедитесь, что путь к routes.jsx верный

const LangContext = createContext();

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be inside LangProvider');
  return ctx;
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ru'); // Язык по умолчанию
  const navigate = useNavigate();
  const location = useLocation();

  // Этот эффект запускается один раз при загрузке и синхронизирует язык с URL
  useLayoutEffect(() => {
    const currentPathname = location.pathname;
    
    // Ищем, какому из наших роутов (русскому или английскому) соответствует текущий URL
    for (const route of routes) {
      if (route.isIndex) continue;

      if (`/${route.path.ru}` === currentPathname) {
        setLang('ru');
        return; // Выходим, как только нашли
      }
      if (`/${route.path.en}` === currentPathname) {
        setLang('en');
        return; // Выходим, как только нашли
      }
    }
  }, [location.pathname]); // Зависимость от pathname для редких случаев

  const toggleLang = () => {
    const currentPathname = location.pathname;
    const newLang = lang === 'ru' ? 'en' : 'ru';
    
    // Ищем текущий роут, чтобы найти его аналог на другом языке
    const currentRoute = routes.find(
      (r) => !r.isIndex && `/${r.path[lang]}` === currentPathname
    );

    // Сначала меняем состояние языка
    setLang(newLang);

    // Если мы на странице, которая есть в нашем списке роутов, делаем редирект
    if (currentRoute) {
      const newPath = `/${currentRoute.path[newLang]}`;
      navigate(newPath);
    }
  };

  const value = { lang, toggleLang, setLang };

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
} 