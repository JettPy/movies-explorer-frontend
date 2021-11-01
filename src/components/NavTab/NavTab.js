import './NavTab.css';

function NavTab() {
  return (
    <nav className="navigation-tab">
      <ul className="navigation-tab__list list">
        <li className="navigation-tab__element">
          <a href="#aboutproject" className="navigation-tab__link link">О проекте</a>
        </li>
        <li className="navigation-tab__element">
          <a href="#techs" className="navigation-tab__link link">Технологии</a>
        </li>
        <li className="navigation-tab__element">
          <a href="#aboutme" className="navigation-tab__link link">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
