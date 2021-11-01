
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './App.css';

import { movies, savedMovies } from '../../utils/data.js'

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registerd, setRegisterd] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  React.useEffect(() => {
    const user = {
      name: 'Сергей',
      email: 'test@user.com',
    }
    setCurrentUser(user);
  }, []);

  const handleRegistration = (email, password) => {
    setRegisterd(true);
    history.push('/signin');
  }

  const handleLogin = (name, email, password) => {
    setLoggedIn(true);
    history.push('/');
  }

  const handleSignOut = () => {
    setLoggedIn(false);
    history.push('/');
  }

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
          <Profile onSignOut={handleSignOut} />
        </ProtectedRoute>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
