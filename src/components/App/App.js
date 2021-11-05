
import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './App.css';
import { mainApi } from '../../utils/MainApi'
import { movieApi } from '../../utils/MoviesApi'
import {
  ERROR_MOVIE_API,
  SHORT_MOVIE,
  LARGE_WIDTH,
  MEDIUM_WIDTH,
  LARGE_INIT_COUNT,
  LARGE_ADD_COUNT,
  MEDIUM_INIT_COUNT,
  MEDIUM_ADD_COUNT,
  SMALL_INIT_COUNT,
  SMALL_ADD_COUNT,
} from '../../utils/constants';


function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchedSavedMovies, setSearchedSavedMovies] = React.useState([]);
  const [isSearched, setIsSearched] = React.useState(false);
  const [isSavedSearched, setIsSavedSearched] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isSearching, setIsSearching] = React.useState(false);
  const [moviesCount, setMoviesCount] = React.useState(0);
  const [addCount, setAddCount] = React.useState(0);
  const [isSending, setIsSending] = React.useState(false);
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    mainApi.getUserInfo()
      .then(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setCurrentUser(user);
          setMovies(JSON.parse(localStorage.getItem('movies')));
          setSavedMovies(JSON.parse(localStorage.getItem('saved')));
          setLoggedIn(true);
          history.push(location);
        }
      })
      .catch(() => {})
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', getNumberOfMovies);
    return () => {
      window.removeEventListener('resize', getNumberOfMovies);
    };
  }, [moviesCount]);

  const getBeatMovies = () => {
    movieApi.getMovies()
      .then((result) => {
        const modifiedMovies = result.map((movie) => {
          return {
            country: movie.country ? movie.country : 'None',
            director: movie.director ? movie.director : 'None',
            duration: movie.duration ? movie.duration : 0,
            year: movie.year ? movie.year : 'None',
            description: movie.description ? movie.description : 'None',
            image: 'https://api.nomoreparties.co' + movie.image.url,
            trailer: movie.trailerLink ? movie.trailerLink : 'None',
            thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU ? movie.nameRU : 'None',
            nameEN: movie.nameEN ? movie.nameEN : 'None'
          }
        });
        setMovies(modifiedMovies);
        localStorage.setItem('movies', JSON.stringify(modifiedMovies));
      })
      .catch((error) => {
        error.then((res) => setMessage(ERROR_MOVIE_API));
        setIsPopupOpen(true)
      });
  };

  const handleRegistration = (name, email, password) => {
    setIsSending(true);
    mainApi.registration(name, email, password)
      .then((result) => {
        handleLogin(email, password);
      })
      .catch((error) => {
        error.then((res) => setMessage(res.message));
      })
      .finally(() => {
        setIsPopupOpen(true);
        setIsSending(false);
      });
  };

  const handleLogin = (email, password) => {
    setIsSending(false);
    mainApi.authorize(email, password)
      .then((result) => {
        mainApi.getUserInfo()
          .then((result) => {
            setCurrentUser(result);
            localStorage.setItem('user', JSON.stringify(result));
          });
        mainApi.getSavedMovies()
          .then((result) => {
            setSavedMovies(result);
            localStorage.setItem('saved', JSON.stringify(result));
          });
        getBeatMovies();
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((error) => {
        error.then((res) => {
          setMessage(res.message);
          setIsPopupOpen(true)
        })
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleSignOut = () => {
    mainApi.logout()
      .then(() => {
        setLoggedIn(false);
        history.push('/');
        localStorage.removeItem('user');
        localStorage.removeItem('saved');
        localStorage.removeItem('movies');
        setMovies([]);
        setSearchedMovies([]);
        setSavedMovies([]);
        setSearchedSavedMovies([]);
        setCurrentUser({});
        setIsSearched(false);
        setIsSavedSearched(false);
      })
      .catch((error) => {
        error.then((res) => {
          setMessage(res.message);
          setIsPopupOpen(true)
        })
      });
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(()=> {
      setIsSuccess(false);
      setMessage('');
    }, 300);
  };

  const handleUpdateUser = (name, email) => {
    setIsSending(true);
    mainApi.updateUserInfo(name, email)
      .then((result) => {
        setCurrentUser(result);
        setIsSuccess(true);
      })
      .catch((error) => {
        error.then((res) => setMessage(res.message));
      })
      .finally(() => {
        setIsPopupOpen(true);
        setIsSending(false);
      });
  };

  const handleSearch = (search, isShort, isSaved) => {
    setIsSending(true);
    setIsSearching(true);
    if (isSaved) {
      setIsSavedSearched(true);
    } else {
      setIsSearched(true);
    }
    getNumberOfMovies();
    setTimeout(() => {
      let foundMovies = null;
      if (isSaved) {
        foundMovies = savedMovies.filter((movie) => {
          const duration = movie.duration;
          const searchedMovie = search.toLowerCase();
          const rus = movie.nameRU.toLowerCase();
          let eng = '';
          if (movie.nameEN) {
            eng = movie.nameEN.toLowerCase();
          }
          return (rus.includes(searchedMovie) || eng.includes(searchedMovie)) && (!isShort || duration <= SHORT_MOVIE);
        });
        setSearchedSavedMovies(foundMovies);
      } else {
        foundMovies = movies.filter((movie) => {
          const duration = movie.duration;
          const searchedMovie = search.toLowerCase();
          const rus = movie.nameRU.toLowerCase();
          let eng = '';
          if (movie.nameEN) {
            eng = movie.nameEN.toLowerCase();
          }
          return (rus.includes(searchedMovie) || eng.includes(searchedMovie)) && (!isShort || duration <= SHORT_MOVIE);
        });
        setSearchedMovies(foundMovies);
      }
      setIsSearching(false);
      setIsSending(false);
    }, 400);
  };

  const handleFilterMovies = (isShort, isSaved) => {
    setIsSending(true);
    setIsSearching(true);
    setTimeout(() => {
      let foundMovies = null;
      if (isSaved) {
        foundMovies = savedMovies.filter((movie) => {
          return isShort || movie.duration <= SHORT_MOVIE;
        });
        setSearchedSavedMovies(foundMovies);
      } else {
        foundMovies = movies.filter((movie) => {
          return isShort || movie.duration <= SHORT_MOVIE;
        });
        setSearchedMovies(foundMovies);
      }
      setIsSearching(false);
      setIsSending(false);
    }, 400);
  };

  const getNumberOfMovies = () => {
    const width = window.screen.availWidth;
    if (width >= LARGE_WIDTH) {
      setMoviesCount(LARGE_INIT_COUNT);
      setAddCount(LARGE_ADD_COUNT);
    } else if (width >= MEDIUM_WIDTH) {
      setMoviesCount(MEDIUM_INIT_COUNT);
      setAddCount(MEDIUM_ADD_COUNT);
    } else {
      setMoviesCount(SMALL_INIT_COUNT);
      setAddCount(SMALL_ADD_COUNT);
    }
  };

  const handleMoreClick = () => {
    setMoviesCount(moviesCount + addCount);
  };

  const handleLikeClick = (movie) => {
    mainApi.saveMovie(movie)
      .then((result) => {
        setSavedMovies([result, ...savedMovies]);
      })
      .catch((error) => {
        error.then((res) => setMessage(res.message));
        setIsPopupOpen(true)
      });
  };

  const handleDeleteClick = (movie) => {
    const delitingMovie = savedMovies.find((i) => {
      return i.movieId === movie.movieId
    });
    mainApi.deleteMovie(delitingMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((m) => m._id !== delitingMovie._id));
        setSearchedSavedMovies(savedMovies.filter((m) => m._id !== delitingMovie._id));
      })
      .catch((error) => {
        error.then((res) => setMessage(res.message));
        setIsPopupOpen(true);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser} >
      <Switch>
        <Route exact path="/" >
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        <ProtectedRoute loggedIn={!loggedIn} path="/signup" redirect="/profile" >
          <Register onRegister={handleRegistration} isSending={isSending} />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={!loggedIn} path="/signin" redirect="/profile" >
          <Login onLogin={handleLogin} isSending={isSending} />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/movies" redirect="/" >
          <Header loggedIn={loggedIn} />
          <Movies
            isSearching={isSearching}
            movies={searchedMovies}
            savedMovies={savedMovies}
            onSearch={handleSearch}
            moviesCount={moviesCount}
            onClick={handleMoreClick}
            onLike={handleLikeClick}
            onDelete={handleDeleteClick}
            filterMovies={handleFilterMovies}
            isSending={isSending}
            isSearched={isSearched}
          />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/saved-movies" redirect="/" >
          <Header loggedIn={loggedIn} />
          <SavedMovies
            isSearching={isSearching}
            movies={searchedSavedMovies}
            savedMovies={savedMovies}
            onSearch={handleSearch}
            moviesCount={moviesCount}
            onClick={handleMoreClick}
            onLike={handleLikeClick}
            onDelete={handleDeleteClick}
            filterMovies={handleFilterMovies}
            isSending={isSending}
            isSearched={isSavedSearched}
          />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/profile" redirect="/" >
          <Header loggedIn={loggedIn} />
          <Profile onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} isSending={isSending} />
        </ProtectedRoute>
        <Route path="*" >
          <PageNotFound history={history} />
        </Route>
      </Switch>
      <Popup
        isPopupOpen={isPopupOpen}
        onClose={closePopup}
        isSuccess={isSuccess}
        message={message}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
