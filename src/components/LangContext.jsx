// src/contexts/LangContext.jsx
import React, { createContext, useState, useContext } from 'react';

// создаём сам контекст
const LangContext = createContext();

// провайдер — обёртка, которая хранит состояние языка
export function LangProvider({ children }) {
  const [lang, setLang] = useState('ru');
  const toggleLang = () => setLang(l => (l === 'ru' ? 'en' : 'ru'));

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

// хук-помощник для удобного доступа к языку
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be inside LangProvider');
  return ctx; // { lang, toggleLang }
}
