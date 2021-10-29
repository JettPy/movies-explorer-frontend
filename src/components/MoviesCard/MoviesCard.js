import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={'https://api.nomoreparties.co' + movie.image.url} className="movie-card__image" alt={movie.nameRU} />
      <div className="movie-card__group">
        <h1 className="movie-card__title">{movie.nameRU}</h1>
        <button className="movie-card__like button" aria-label="Лайк" type="button"></button>
      </div>
      <p className="movie-card__duration">{Math.floor(movie.duration / 60) + 'ч ' + movie.duration % 60 + 'м'}</p>
    </div>
  );
}

export default MoviesCard;
