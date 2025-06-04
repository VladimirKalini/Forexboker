
import './style-components.css';
import React, { useContext } from 'react';
import { LoadingContext } from './LoaderContext';


const Loader = () => {
   const { loading } = useContext(LoadingContext);
   // ВСЕГДА рендерим, а видимость контролируем через класс
   return (
     <div className={`fx-loader${loading ? ' visible' : ''}`}>
       <div className="fx-circle" />
       <span className="fx-letter fx-letter--1">F</span>
       <span className="fx-letter fx-letter--2">X</span>
     </div>
   );
 };

 export default Loader;