import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {

  const handleInputEmail = (event) => {
    console.log(event.target.value);
  }

  const handleInputPassword = (event) => {
    console.log(event.target.value);
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
      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form" name="login" onSubmit={submit}>
        <fieldset className="auth__set">
          <label className="auth__label" htmlFor="email-input">E&#8209;mail</label>
          <input
            className="auth__input"
            type="email"
            name="email"
            placeholder="email@example.ru"
            id="email-input"
            onChange={handleInputEmail}
          />
          <label className="auth__label" htmlFor="password-input">Пароль</label>
          <input
            className="auth__input"
            type="password"
            name="password"
            id="password-input"
            onChange={handleInputPassword}
          />
          <button className="auth__button button" type="submit">Войти</button>
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
