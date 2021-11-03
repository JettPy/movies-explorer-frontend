import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ isSearching, movies, savedMovies, onSearch, moviesCount, onClick, onLike, onDelete, filterMovies }) {

  return (
    <main>
      <SearchForm onSearch={onSearch} isSaved={true} filterMovies={filterMovies} />
      {isSearching ? (
        <Preloader />
      ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            isSaved={true}
            moviesCount={moviesCount}
            onClick={onClick}
            onLike={onLike}
            onDelete={onDelete}
          />
      )}
    </main>
  );
}

export default SavedMovies;
