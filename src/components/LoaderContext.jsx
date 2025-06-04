import React, { createContext, useState } from 'react';

// Контекст для управления лоадером
export const LoadingContext = createContext({ loading: false, setLoading: () => {} });

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};