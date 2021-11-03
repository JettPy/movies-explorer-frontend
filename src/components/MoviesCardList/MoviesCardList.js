import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';

function MoviesCardList({ movies, savedMovies, isSaved, moviesCount, onClick, onLike, onDelete, isSearched }) {
  return (
    <section className="card-list">
      <ul className="card-list__list list">
        {movies.map((item) => (
          <MoviesCard movie={item}
          isSaved={isSaved}
          savedMovies={savedMovies}
          onLike={onLike}
          onDelete={onDelete}
          key={item.movieId}
        />
        )).slice(0, moviesCount)}
      </ul>
      <p className={`card-list__warning${movies.length !== 0 || !isSearched ? ' card-list__warning_diabled' : ''}`}>Ничего не найдено</p>
      {(!isSaved && movies.length > moviesCount && isSearched) && (
        <button className="card-list__more button" aria-label="Ещё" type="button" onClick={onClick}>Ещё</button>
      )}
    </section>
  );
}

export default MoviesCardList;
