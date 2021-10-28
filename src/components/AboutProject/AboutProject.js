import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="aboutproject">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__description">
        <h3 className="about-project__description-tile">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__information">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <h3 className="about-project__description-tile">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__information">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__chart">
        <h3 className="about-project__chart-title about-project__chart-title_highlight">1 неделя</h3>
        <p className="about-project__label">Back-end</p>
        <h3 className="about-project__chart-title">4 недели</h3>
        <p className="about-project__label">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
