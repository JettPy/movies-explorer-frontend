import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__collaboration">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__etc">
        <nav className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com/JettPy" target="_blank" className="footer__link">Github</a>
          <a href="https://www.facebook.com/" target="_blank" className="footer__link">Facebook</a>
        </nav>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
