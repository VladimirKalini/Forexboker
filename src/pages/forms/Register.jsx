// src/pages/forms/Register.jsx
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import CountrySelect from '../../components/CountrySelect';
import { Helmet } from 'react-helmet-async';

export default function Register() {
  const navigate = useNavigate();
//test@gmail.com
//QWEtest@gmail.com123
  // Lang & form state
  const [lang, setLang] = useState('ru');
  const isRu = lang === 'ru';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // UI state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleLang   = () => setLang(l => l === 'ru' ? 'en' : 'ru');
  const togglePass   = () => setShowPass(v => !v);
  const toggleConfirm= () => setShowConfirm(v => !v);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Клиентская валидация
    if (password !== confirm) {
      setError(isRu
        ? 'Пароли не совпадают.'
        : 'Passwords do not match.');
      return;
    }
    // (опционально) здесь можно добавить проверку сложности пароля

    setLoading(true);
    
    // Подготавливаем данные для отправки
    const requestData = {
      email,
      password,
      password_repeat: confirm,
      first_name: firstName,
      last_name: lastName,
      country,
      phone
    };
    
    // Логируем данные для отладки
    console.log('Отправляемые данные:', requestData);
    console.log('JSON строка:', JSON.stringify(requestData));
    
    try {
      const res = await fetch(
        'https://forexbroker.com.de/api/v1/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData)
        }
      );
      const result = await res.json();
      
      // Детальное логирование ответа сервера
      console.log('=== ДЕТАЛЬНЫЙ АНАЛИЗ ОТВЕТА ===');
      console.log('HTTP статус:', res.status);
      console.log('res.ok:', res.ok);
      console.log('Полный ответ:', result);
      console.log('result.status:', result.status);
      console.log('result.data:', result.data);
      console.log('result.data?.redirect_url:', result.data?.redirect_url);
      console.log('result.detail:', result.detail);
      console.log('result.message:', result.message);

      if (result.status === 'success' && result.data?.redirect_url) {
        console.log('✅ УСПЕХ! Редиректим на:', result.data.redirect_url);
        window.location.href = result.data.redirect_url;
      } else {
        console.log('❌ ОШИБКА или нет redirect_url');
        console.log('Условие result.status === "success":', result.status === 'success');
        console.log('Условие result.data?.redirect_url:', !!result.data?.redirect_url);
        
        // Ошибка или нет redirect_url
        setError(result.detail || result.message || (isRu
          ? 'Не удалось зарегистрироваться.'
          : 'Registration failed.'));
      }
    } catch (err) {
      console.error(err);
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
       <title>Восстановить доступ к личному кабинету | FXBroker</title>
       <meta name="description" content="абыли пароль? Укажите ваш email, и мы вышлем инструкцию по безопасному восстановлению доступа к вашему торговому счету в FXBroker." />
    </Helmet>
    <div className="login-page">
      <div className="login-card">
        <div className="register-header">
          <button className="back-btn" onClick={() => navigate(-1)}>←</button>
          <h2 className="register-title">
            {isRu ? 'Зарегистрироваться' : 'Register'}
          </h2>
          <button className="lang-toggle" onClick={toggleLang}>
            {lang.toUpperCase()}
          </button>
        </div>

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
              type={showPass ? 'text' : 'password'}
              placeholder={isRu ? 'Пароль' : 'Password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={togglePass}>
              {showPass ? <Eye size={20}/> : <EyeOff size={20}/>}
            </span>
          </div>

          <div className="input-group">
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder={isRu ? 'Подтвердите пароль' : 'Confirm password'}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={toggleConfirm}>
              {showConfirm ? <Eye size={20}/> : <EyeOff size={20}/>}
            </span>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder={isRu ? 'Имя' : 'First Name'}
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder={isRu ? 'Фамилия' : 'Last Name'}
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <CountrySelect
              value={country}
              onChange={e => setCountry(e.target.value)}
              placeholder={isRu ? 'Выберите свою страну' : 'Select your country'}
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              placeholder={isRu ? 'Телефон' : 'Phone'}
              value={phone}
              onChange={e => {
                // Очистка от лишних символов, оставляем только цифры и +
                const cleanPhone = e.target.value.replace(/[^\d+]/g, '');
                setPhone(cleanPhone);
              }}
              required
            />
          </div>

          <button
            type="submit"
            className="btn-submit register-btn"
            disabled={loading}
          >
            {loading
              ? (isRu ? 'Отправка...' : 'Submitting...')
              : (isRu ? 'Зарегистрироваться' : 'Register')}
          </button>
        </form>

        <p className="register-text">
          {isRu ? 'Уже есть аккаунт?' : 'Already have an account?'}
          <Link to="/login"> {isRu ? 'Войти' : 'Sign in'}</Link>
        </p>
      </div>
    </div>
    </>
  );
}