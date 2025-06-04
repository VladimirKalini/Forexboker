// src/pages/forms/Login.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';

export default function Login() {
  const navigate = useNavigate();

  // 1) State-переменные
  const [lang, setLang] = useState('ru');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const isRu = lang === 'ru';

  const toggleLang = () => setLang(l => (l === 'ru' ? 'en' : 'ru'));
  const togglePassword = () => setShowPassword(v => !v);

  // 2) Обработчик отправки
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'}/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            password,
            language: lang
          })
        }
      );

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        // на бэке должен вернуть redirect_url
        navigate(result.data.redirect_url);
      } else {
        // подставляем ошибку от сервера или общее сообщение
        setError(result.detail || (isRu
          ? 'Не удалось войти. Проверьте данные.'
          : 'Login failed. Check your credentials.'));
      }
    } catch (err) {
      console.error(err);
      setError(isRu
        ? 'Ошибка соединения с сервером.'
        : 'Server connection error.');
    }
  };

  return (
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
            />
          </div>

          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={isRu ? 'Пароль' : 'Password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
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
            <Link to="/forgot-password" className="forgot-link">
              {isRu ? 'Забыли пароль?' : 'Forgot password?'}
            </Link>
          </div>

          <button type="submit" className="btn-submit">
            {isRu ? 'Войти' : 'Sign in'}
          </button>
        </form>

        <p className="register-text">
          {isRu ? 'Нет аккаунта?' : "Don't have an account?"}
          <Link to="/register"> {isRu ? 'Зарегистрироваться' : 'Register'}</Link>
        </p>
      </div>
    </div>
  );
}
