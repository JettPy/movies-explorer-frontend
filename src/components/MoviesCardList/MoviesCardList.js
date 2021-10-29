import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';

function MoviesCardList({ movies }) {
  return (
    <section className="card-list">
      <ul className="card-list__list list">
        {movies.map((item) => (
          <MoviesCard movie={item} key={item._id} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
