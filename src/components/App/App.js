
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

import { movies, savedMovies } from '../../utils/data.js'

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    tokenCheck();
  }, []);

  const handleClickBack = () => {
    history.goBack();
  }

  const tokenCheck = () => {
    mainApi.getUserInfo()
      .then((result) => {
        setCurrentUser(result);
        setLoggedIn(true);
        history.push(location);
      })
      .catch((error) => {
        history.push('/');
      });
  };

  const handleRegistration = (name, email, password) => {
    mainApi.registration(name, email, password)
      .then(() => {
        setIsSuccess(true);
        history.push('/signin');
      })
      .catch((error) => {
        error.then((res) => setMessage(res.message));
      })
      .finally(() => {
        setIsPopupOpen(true);
      });
  }

  const handleLogin = (email, password) => {
    mainApi.authorize(email, password)
      .then((response) => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((error) => {
        error.then((res) => setMessage(res.message));
        setIsPopupOpen(true)
      });
  }

  const handleSignOut = () => {
    mainApi.logout()
      .then((response) => {
        setLoggedIn(false);
        history.push('/');
      })
      .catch((error) => {
        error.then((res) => setMessage(res.message));
        setIsPopupOpen(true)
      });

  }

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(()=> {
      setIsSuccess(false);
      setMessage('');
    }, 300);
  }

  const handleUpdateUser = (name, email) => {
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
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegistration} />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <ProtectedRoute loggedIn={loggedIn} path="/movies">
          <Header loggedIn={loggedIn} />
          <Movies movies={movies} />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/saved-movies">
          <Header loggedIn={loggedIn} />
          <SavedMovies movies={savedMovies} />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute loggedIn={loggedIn} path="/profile">
          <Header loggedIn={loggedIn} />
          <Profile onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} />
        </ProtectedRoute>
        <Route path="*">
          <PageNotFound goBack={handleClickBack} />
        </Route>
      </Switch>
      <Popup isPopupOpen={isPopupOpen} onClose={closePopup} isSuccess={isSuccess} message={message} />
    </CurrentUserContext.Provider>
  );
}

export default App;
