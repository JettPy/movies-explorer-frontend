import './Portfolio.css';
import icon from '../../images/ref.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <nav>
        <ul className="list">
          <li className="portfolio__element">
            <p className="portfolio__discription">Статичный сайт</p>
            <a href="https://jettpy.github.io/how-to-learn/" target="_blank" className="portfolio__link link" rel="noreferrer">
              <img src={icon} alt="Переход по ссылке" className="portfolio__icon"/>
            </a>
          </li>
          <li className="portfolio__element">
            <p className="portfolio__discription">Адаптивный сайт</p>
            <a href="https://jettpy.github.io/russian-travel/" target="_blank" className="portfolio__link link" rel="noreferrer">
              <img src={icon} alt="Переход по ссылке" className="portfolio__icon" />
            </a>
          </li>
          <li className="portfolio__element">
            <p className="portfolio__discription">Одностраничное приложение</p>
            <a href="https://jettpy.github.io/mesto/" target="_blank" className="portfolio__link link" rel="noreferrer">
              <img src={icon} alt="Переход по ссылке" className="portfolio__icon" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;
