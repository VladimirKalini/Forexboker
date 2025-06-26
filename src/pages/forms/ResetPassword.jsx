import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import '../../App.css';

// Компонент теперь объявляется и экспортируется в одной строке
export default function ForgotPassword() {
  const navigate = useNavigate();

  const [lang, setLang] = useState('ru');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const isRu = lang === 'ru';

  const toggleLang = () => {
    setLang(l => (l === 'ru' ? 'en' : 'ru'));
    setError(null);
    setMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1'}/reset-password`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_email: email })
        }
      );
      const result = await res.json();
      if (res.ok && result.status === 'success') {
        setMessage(isRu ? 'Ссылка для сброса пароля отправлена на ваш email.' : 'Password reset link sent to your email.');
      } else {
        setError(result.detail || (isRu ? 'Не удалось сбросить пароль.' : 'Failed to reset password.'));
      }
    } catch (err) {
      setError(isRu ? 'Ошибка соединения с сервером.' : 'Server connection error.');
    }
  };

  return (
    <>
    <Helmet>
        <title>Открыть брокерский счет онлайн | FXBroker</title>
        <meta name="description" content="Создайте аккаунт в FXBroker всего за несколько минут и получите доступ к миру инвестиций. Начните торговать на бирже уже сегодня!" />
    </Helmet>
    <div className="form-page-background"> 
      
      <div className="fp-card">
        <div className="fp-header">
          <button onClick={() => navigate(-1)} className="fp-header-btn">
            <ArrowLeft size={20} />
          </button>
          <h2>{isRu ? 'Забыли пароль' : 'Forgot password'}</h2>
          <button className="fp-header-btn fp-lang-toggle" onClick={toggleLang}>
            {lang.toUpperCase()}
          </button>
        </div>

        {error && <div className="error-msg">{error}</div>}
        {message && <div className="success-msg">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="fp-input-group">
            <label className="fp-label" htmlFor="email">{isRu ? 'Электронная почта' : 'Email'}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <p className="fp-instructions">
            {isRu
              ? 'Введите email, указанный при регистрации. На ваш email будет отправлено сообщение со ссылкой для смены пароля.'
              : 'Enter the email you used during registration. A message with a link to change your password will be sent to your email.'
            }
          </p>

          <button type="submit" className="fp-btn-submit">
            {isRu ? 'Отправить' : 'Send'}
          </button>
        </form>

        <p className="fp-support-text">
          {isRu
            ? 'Если вы забыли email, пожалуйста, обратитесь в службу поддержки'
            : 'If you have forgotten your email, please contact support'
          }
        </p>
      </div>
    </div>
    </>
  );
}