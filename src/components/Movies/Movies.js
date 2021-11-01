import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ movies }) {

  return (
    <main>
      <SearchForm />
      {false ? (
        <Preloader />
      ) : (
          <MoviesCardList movies={movies} isSaved={false} />
      )}
    </main>
  );
}

export default Movies;
