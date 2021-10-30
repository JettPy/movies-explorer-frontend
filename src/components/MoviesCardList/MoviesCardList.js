import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css';

function MoviesCardList({ movies, isSaved }) {

  const handleMoreClick = () => {
    console.log('Ещё!!');
  }

  return (
    <section className="card-list">
      <ul className="card-list__list list">
        {movies.map((item) => (
          <MoviesCard movie={item} isSaved={isSaved} key={item.id} />
        ))}
      </ul>
      {!isSaved && (
        <button className="card-list__more button" aria-label="Ещё" type="button" onClick={handleMoreClick}>Ещё</button>
      )}
    </section>
  );
}

export default MoviesCardList;
