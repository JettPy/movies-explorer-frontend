import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {

  const [movie, setMovie] = React.useState('');

  React.useEffect(() => {
    setMovie('');
  }, []);

  const handleInputMovie = (event) => {
    setMovie(event.target.value);
    console.log(movie);
  }

  const submit = (event) => {
    event.preventDefault();
    console.log('Отправлено!');
  };

  return (
    <section className="search">
      <form name="movies" onSubmit={submit}>
        <fieldset className="search__set">
          <input
            className="search__input"
            type="text"
            name="movie"
            placeholder="Фильм"
            id="movie-input"
            onChange={handleInputMovie}
            required
          />
          <button className="search__button button" type="submit"></button>
        </fieldset>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
