import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies({ isSearching, movies, savedMovies, onSearch, isSaved, moviesCount, onClick, onLike, onDelete, filterMovies, isSending, isSearched }) {

  return (
    <main className="main">
      <SearchForm onSearch={onSearch} isSaved={isSaved} filterMovies={filterMovies} isSending={isSending} />
      {isSearching ? (
        <Preloader />
      ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            isSaved={isSaved}
            moviesCount={moviesCount}
            onClick={onClick}
            onLike={onLike}
            onDelete={onDelete}
            isSearched={isSearched}
          />
      )}
    </main>
  );
}

export default Movies;
