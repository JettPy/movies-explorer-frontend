import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, isSaved }) {

  const [isLiked, setIsLiked] = React.useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  }

  const handleDeleteClick = () => {
    console.log('Удалено!');
  }

  return (
    <div className="movie-card">
      <img src={'https://api.nomoreparties.co' + movie.image.url} className="movie-card__image" alt={movie.nameRU} />
      <div className="movie-card__container">
        <div className="movie-card__group">
          <h1 className="movie-card__title">{movie.nameRU}</h1>
          {isSaved ? (
            <button className="movie-card__delete button" aria-label="Удалить" type="button" onClick={handleDeleteClick}></button>
          ) : (
            <button className={`movie-card__like button ${isLiked && "movie-card__like_active"}`} aria-label="Лайк" type="button" onClick={handleLikeClick}></button>
          )}
        </div>
        <p className="movie-card__duration">{Math.floor(movie.duration / 60) + 'ч ' + movie.duration % 60 + 'м'}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
