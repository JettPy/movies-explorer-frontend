import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ isSearching, movies, savedMovies, onSearch, moviesCount, onClick, onLike, onDelete, filterMovies }) {

  return (
    <main>
      <SearchForm onSearch={onSearch} isSaved={false} filterMovies={filterMovies} />
      {isSearching ? (
        <Preloader />
      ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            isSaved={false}
            moviesCount={moviesCount}
            onClick={onClick}
            onLike={onLike}
            onDelete={onDelete}
          />
      )}
    </main>
  );
}

export default Movies;
