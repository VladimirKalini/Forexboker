import { Link } from 'react-router-dom';
import { useLang } from './LangContext';

import "../pages/analytics/StyleAnalytics.css";

export default function Register() {
  const { lang } = useLang();

  return (
   <main>
    <Link className="hero__btn" to="/register">
    {lang === 'ru' ? 'Зарегестрироваться' 
            : 'Register'}
    </Link>
   </main>
   );
}