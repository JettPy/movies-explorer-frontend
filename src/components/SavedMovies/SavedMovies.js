import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies({ movies }) {

  return (
    <main>
      <SearchForm />
      {false ? (
        <Preloader />
      ) : (
          <MoviesCardList movies={movies} isSaved={true} />
      )}
    </main>
  );
}

export default SavedMovies;
