import avatar from '../../images/default.png';
import menuIcon from '../../images/menu.svg'
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {

  const onOpenMenu = () => {
    console.log('Тык!');
  };

  return (
    <nav className="navigation">
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
      <button className="navigation__menu" onClick={onOpenMenu}>
        <img src={menuIcon} alt="Меню" className="navigation__menu-icon" />
      </button>
    </nav>
  );
}

export default Navigation;
