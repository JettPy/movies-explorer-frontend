import React from 'react';
import avatar from '../../images/default.png';
import { Link, NavLink } from "react-router-dom";
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
      <div className={`overlay navigation__overlay${isMenuOpen ? ' overlay_opened' : ''}`}>
        <div className={`navigation__menu${isMenuOpen ? ' navigation__menu_opened' : ''}`}>
          <ul className="navigation__menu-list list">
            <li className="navigation__menu-element">
              <NavLink exact to="/" className="navigation__link link" activeClassName="navigation__link_active" onClick={onClose}>Главная</NavLink>
            </li>
            <li className="navigation__menu-element">
              <NavLink to="/movies" className="navigation__link link" activeClassName="navigation__link_active" onClick={onClose}>Фильмы</NavLink>
            </li>
            <li className="navigation__menu-element">
              <NavLink to="/saved-movies" className="navigation__link link" activeClassName="navigation__link_active" onClick={onClose}>Сохранённые фильмы</NavLink>
            </li>
          </ul>
          <NavLink to="/profile" className="navigation__profile link" activeClassName="navigation__link_active" onClick={onClose}>
            Аккаунт
            <img src={avatar} alt="Аватар" className="navigation__avatar" />
          </NavLink>
          <button className="navigation__close button" aria-label="Закрыть" type="button" onClick={onClose}></button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
