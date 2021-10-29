import Navigation from '../Navigation/Navigation'
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import './Header.css';

function Header({loggedIn}) {
  return (
    <header className="header">
      <Link to="/" className="header__link header__link_logo link">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      {loggedIn ? (
          <Navigation />
      ) : (
          <nav>
            <ul className="header__list list">
              <li className="header__element">
                <Link to="/signup" className="header__link link">Регистрация</Link>
              </li>
              <li className="header__element">
                <Link to="/signin" className="header__link header__link_highlight link">Войти</Link>
              </li>
            </ul>
          </nav>
      )}
    </header>
  );
}

export default Header;
