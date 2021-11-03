class MovieApi {

  constructor(baseUrl) {
    this._url = baseUrl;
    this._options = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(result.json());
  }

  getMovies() {
    return fetch(this._url, this._options)
      .then(this._checkResponse);
  };
}

export const movieApi = new MovieApi('https://api.nomoreparties.co/beatfilm-movies');
