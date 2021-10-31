import React from 'react';
import avatar from '../../images/default.png';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const onOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__bar">
        <ul className="navigation__list list">
          <li className="navigation__element">
            <Link to="/movies" className="navigation__link link">Фильмы</Link>
          </li>
          <li className="navigation__element">
            <Link to="/saved-movies" className="navigation__link link">Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to="/profile" className="navigation__profile link">
          Аккаунт
          <img src={avatar} alt="Аватар" className="navigation__avatar" />
        </Link>
      </div>
      <button className="navigation__button button" onClick={onOpenMenu}></button>
      <div className={`navigation__overlay ${isMenuOpen && "navigation__overlay_opened"}`}>
        <div className={`navigation__menu ${isMenuOpen && "navigation__menu_opened"}`}>
          <ul className="navigation__menu-list list">
            <li className="navigation__menu-element">
              <Link to="/" className="navigation__link link" onClick={onClose}>Главная</Link>
            </li>
            <li className="navigation__menu-element">
              <Link to="/movies" className="navigation__link link" onClick={onClose}>Фильмы</Link>
            </li>
            <li className="navigation__menu-element">
              <Link to="/saved-movies" className="navigation__link link" onClick={onClose}>Сохранённые фильмы</Link>
            </li>
          </ul>
          <Link to="/profile" className="navigation__profile link" onClick={onClose}>
            Аккаунт
            <img src={avatar} alt="Аватар" className="navigation__avatar" />
          </Link>
          <button className="navigation__close button" aria-label="Закрыть" type="button" onClick={onClose}></button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
