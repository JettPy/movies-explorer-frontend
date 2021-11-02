class MainApi {

  constructor(baseUrl) {
    this._url = baseUrl;
    this._options = {
      credentials: 'include',
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

  getUserInfo(token) {
    return fetch(this._url + '/users/me', this._options)
      .then(this._checkResponse);
  }

  updateUserInfo(name, email) {
    return fetch(this._url + '/users/me', {
      method: "PATCH",
      body: JSON.stringify({
        name,
        email
      }),
      ...this._options
    })
      .then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(this._url + '/movies', this._options)
      .then(this._checkResponse);
  }

  saveMovie(country, director, duration, year, description, image, trailer, thumbnail, movieId, nameRU, nameEN) {
    return fetch(this._url + '/movies', {
      method: "POST",
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      }),
      ...this._options
    })
      .then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(this._url + '/movies/' + movieId, {
      method: "DELETE",
      ...this._options
    })
      .then(this._checkResponse);
  }

  registration(name, email, password) {
    return fetch(this._url + '/signup', {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password
      }),
      ...this._options
    })
      .then(this._checkResponse);
  }

  authorize(email, password) {
    return fetch(this._url + '/signin', {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      }),
      ...this._options
    })
      .then(this._checkResponse);
  }

  logout() {
    return fetch(this._url + '/signout', {
      method: "POST",
      ...this._options
    })
      .then(this._checkResponse);
  }

}

export const mainApi = new MainApi('https://api.susliksmovies.nomoredomains.monster');
