// src/pages/forms/Login.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import { Helmet } from 'react-helmet-async';

export default function Login() {
  const navigate = useNavigate();

  // State-переменные
  const [lang, setLang] = useState('ru');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const isRu = lang === 'ru';

  const toggleLang = () => setLang(l => (l === 'ru' ? 'en' : 'ru'));
  const togglePassword = () => setShowPassword(v => !v);

  // Обработчик отправки
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Подготавливаем данные для отправки
    const requestData = {
      email,
      password
    };

    // Логируем данные для отладки
    console.log('Отправляемые данные (Login):', requestData);

    try {
      const response = await fetch(
        'https://forexbroker.com.de/api/v1/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData)
        }
      );

      const result = await response.json();

      // Логируем ответ сервера
      console.log('Ответ сервера (Login):', result);
      console.log('HTTP статус:', response.status);

      if (result.status === 'success' && result.data?.redirect_url) {
        console.log('✅ УСПЕХ! Редиректим на:', result.data.redirect_url);
        // Используем window.location.href для редиректа
        window.location.href = result.data.redirect_url;
      } else {
        console.log('❌ ОШИБКА входа');
        // подставляем ошибку от сервера или общее сообщение
        setError(result.detail || result.message || (isRu
          ? 'Не удалось войти. Проверьте данные.'
          : 'Login failed. Check your credentials.'));
      }
    } catch (err) {
      console.error('Ошибка при отправке формы:', err);
      setError(isRu
        ? 'Ошибка соединения с сервером.'
        : 'Server connection error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
        <title>Вход в личный кабинет | FXBroker</title>
       <meta name="description" content="Введите ваш логин и пароль для доступа к личному кабинету клиента FXBroker. Управляйте своим портфелем и торгуйте в любое время." />
    </Helmet>
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="logo">📈 FxBroker</span>
          <button className="lang-toggle" onClick={toggleLang}>
            {lang.toUpperCase()}
          </button>
        </div>

        <h2>{isRu ? 'Войти' : 'Sign in'}</h2>

        {/* Показываем ошибку, если есть */}
        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={isRu ? 'Пароль' : 'Password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            <span className="password-toggle" onClick={togglePassword}>
              {showPassword ? <Eye size={20}/> : <EyeOff size={20}/>}
            </span>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" defaultChecked />
              <span>{isRu ? 'Запомнить' : 'Remember'}</span>
            </label>
            <Link to="/resetpassword" className="forgot-link">
              {isRu ? 'Забыли пароль?' : 'Forgot password?'}
            </Link>
          </div>

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading
              ? (isRu ? 'Вход...' : 'Signing in...')
              : (isRu ? 'Войти' : 'Sign in')}
          </button>
        </form>

        <p className="register-text">
          {isRu ? 'Нет аккаунта?' : "Don't have an account?"}
          <Link to="/register"> {isRu ? 'Зарегистрироваться' : 'Register'}</Link>
        </p>
      </div>
    </div>
    </>
  );
}