import './NavTab.css';

function NavTab() {
  return (
    <nav className="navigation">
      <ul className="navigation__list list">
        <li className="navigation__element">
          <a href="#aboutproject" className="navigation__link link">О проекте</a>
        </li>
        <li className="navigation__element">
          <a href="#techs" className="navigation__link link">Технологии</a>
        </li>
        <li className="navigation__element">
          <a href="#aboutme" className="navigation__link link">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
