import React from "react";
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import './Register.css';

function Register() {

  const [name, setName] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [passwordValidationMessage, setPasswordValidationMessage] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    setIsFormValid(isNameValid && isEmailValid && isPasswordValid);
  }, [isNameValid, isEmailValid, isPasswordValid]);

  const handleInputName = (event) => {
    setName(event.target.value);
    setIsNameValid(event.target.checkValidity());
    setNameValidationMessage(event.target.validationMessage);
  }

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

  const submit = (event) => {
    event.preventDefault();
    console.log('Отправлено!');
  };

  return (
    <main className="auth">
      <Link to="/" className="link__logo link">
        <img src={logo} alt="Логотип" className="auth__logo" />
      </Link>
      <h1 className="auth__title">Добро пожаловать!</h1>
      <form className="auth__form" name="login" onSubmit={submit}>
        <fieldset className="auth__set">
          <label className="auth__label" htmlFor="name-input">Имя</label>
          <input
            className={`auth__input${!isNameValid ? ' error__input' : ''}`}
            type="text"
            name="name"
            placeholder="Как вас зовут?"
            id="name-input"
            onChange={handleInputName}
            minLength="2"
            required
          />
          <span className="error__span">{nameValidationMessage}</span>
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
          <button className={`auth__button auth__button_register button${!isFormValid ? ' error_button' : ''}`} type="submit" disabled={!isFormValid}>Зарегистрироваться</button>
        </fieldset>
      </form>
      <p className="auth__caption">
        Уже зарегистрированы?&ensp;
        <Link to="/signup" className="auth__link link">Войти</Link>
      </p>
    </main>
  );
}

export default Register;
