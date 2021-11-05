import { Link } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound({ history }) {
  return (
    <section className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__caption">Страница не найдена</p>
      <Link to="#" className="page-not-found__link link" onClick={() => history.goBack()}>Назад</Link>
    </section>
  );
}

export default PageNotFound;
