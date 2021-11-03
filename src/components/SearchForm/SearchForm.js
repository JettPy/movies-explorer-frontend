import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearch, isSaved, filterMovies, isSending }) {

  const [movie, setMovie] = React.useState('');
  const [movieValidationMessage, setMovieValidationMessage] = React.useState('');
  const [isShort, setIsShort] = React.useState(false);

  const handleInputMovie = (event) => {
    setMovie(event.target.value);
    setMovieValidationMessage(event.target.validationMessage);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (movie.length > 0) {
      onSearch(movie, isShort, isSaved);
    } else {
      setMovieValidationMessage('Нужно ввести ключевое слово');
    }
  };

  return (
    <section className="search">
      <form name="movies" onSubmit={handleSubmit}>
        <fieldset className="search__set">
          <input
            className="search__input"
            type="text"
            name="movie"
            placeholder="Фильм"
            id="movie-input"
            onChange={handleInputMovie}
            disabled={isSending}
          />
          <button className="search__button button" type="submit" disabled={isSending} ></button>
        </fieldset>
        <span className="error__span">{movieValidationMessage}</span>
      </form>
      <FilterCheckbox isShort={isShort} setIsShort={setIsShort} isSaved={isSaved} filterMovies={filterMovies} isSending={isSending} />
    </section>
  );
}

export default SearchForm;
