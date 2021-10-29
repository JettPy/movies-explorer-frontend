import './AboutMe.css';
import student from '../../images/student.png';

function AboutMe() {
  return (
    <section className="about-me" id="aboutme">
      <h2 className="section-title">Студент</h2>
      <div className="about-me__table">
        <div className="about-me__content">
          <h3 className="about-me__name">Сергей</h3>
          <p className="about-me__about">Фронтенд-разработчик, 20 лет</p>
          <p className="about-me__discription">
            Я родился и живу в Москве, закончиваю бакалавриат факультета "Информатика и системы управления" МГТУ им. Н. Э. Баумана. Я люблю познавать новое, особенно в программировании. После того, как пройду курс по веб&#8209;разработке, хочу устроиться в отличную компанию и продолжить улучшать свое мастерство и стать сильным разработчиком.
          </p>
          <nav>
            <ul className="about-me__list list">
              <li className="about-me__element">
                <a href="https://www.facebook.com/" target="_blank" className="about-me__link link" rel="noreferrer">Facebook</a>
              </li>
              <li className="about-me__element">
                <a href="https://github.com/JettPy" target="_blank" className="about-me__link link" rel="noreferrer">Github</a>
              </li>
            </ul>
          </nav>
        </div>
        <img src={student} alt="Автор сайта" className="about-me__student" />
      </div>
    </section>
  );
}

export default AboutMe;
