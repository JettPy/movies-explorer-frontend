import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__collaboration">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__etc">
        <nav>
          <ul className="footer__list list">
            <li className="footer__element">
              <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link link" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__element">
              <a href="https://github.com/JettPy" target="_blank" className="footer__link link" rel="noreferrer">Github</a>
            </li>
            <li className="footer__element">
              <a href="https://www.facebook.com/" target="_blank" className="footer__link link" rel="noreferrer">Facebook</a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
