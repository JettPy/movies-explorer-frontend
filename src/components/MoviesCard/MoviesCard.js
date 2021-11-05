import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, isSaved, savedMovies, onLike, onDelete }) {

  const [isLiked, setIsLiked] = React.useState(savedMovies.some(i => i.movieId === movie.movieId));

  const handleLikeClick = () => {
    if (!isLiked) {
      onLike(movie);
    } else {
      onDelete(movie);
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="movie-card">
      <a href={movie.trailer} target="_blank" className="movie-card__link link" rel="noreferrer">
        <img src={movie.image} className="movie-card__image" alt={movie.nameRU} />
      </a>
      <div className="movie-card__container">
        <div className="movie-card__group">
          <h1 className="movie-card__title">{movie.nameRU}</h1>
          {isSaved ? (
            <button className="movie-card__delete button" aria-label="Удалить" type="button" onClick={handleLikeClick}></button>
          ) : (
              <button className={`movie-card__like button${isLiked ? ' movie-card__like_active' : ''}`} aria-label="Лайк" type="button" onClick={handleLikeClick}></button>
          )}
        </div>
        <p className="movie-card__duration">{Math.floor(movie.duration / 60) + 'ч ' + movie.duration % 60 + 'м'}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
