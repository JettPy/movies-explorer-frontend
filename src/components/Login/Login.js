import React from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import './Login.css';

function Login({ onLogin }) {

  const [email, setEmail] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [passwordValidationMessage, setPasswordValidationMessage] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(event.target.checkValidity());
    setEmailValidationMessage(event.target.validationMessage);
  }

  const handleInputPassword = (event) => {
    setPassword(event.target.value);
    setIsPasswordValid(event.target.checkValidity());
    setPasswordValidationMessage(event.target.validationMessage);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <main className="auth">
      <Link to="/" className="link__logo link">
        <img src={logo} alt="Логотип" className="auth__logo" />
      </Link>
      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form" name="login" onSubmit={handleSubmit}>
        <fieldset className="auth__set">
          <label className="auth__label" htmlFor="email-input">E&#8209;mail</label>
          <input
            className={`auth__input${!isEmailValid ? ' error__input' : ''}`}
            type="email"
            name="email"
            placeholder="email@example.ru"
            id="email-input"
            onChange={handleInputEmail}
            required
          />
          <span className="error__span">{emailValidationMessage}</span>
          <label className="auth__label" htmlFor="password-input">Пароль</label>
          <input
            className={`auth__input${!isPasswordValid ? ' error__input' : ''}`}
            type="password"
            name="password"
            id="password-input"
            onChange={handleInputPassword}
            minLength="8"
            required
          />
          <span className="error__span">{passwordValidationMessage}</span>
          <button className={`auth__button button${!isFormValid ? ' error_button' : ''}`} type="submit" disabled={!isFormValid}>Войти</button>
        </fieldset>
      </form>
      <p className="auth__caption">
        Ещё не зарегистрированы?&ensp;
        <Link to="/signup" className="auth__link link">Регистрация</Link>
        </p>
    </main>
  );
}

export default Login;
