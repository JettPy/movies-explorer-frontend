
import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    const user = {
      name: 'Сергей',
      email: 'test@user.com',
    }
    setCurrentUser(user);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={false} />
          <Main />
          <Footer />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/movies">
          <Header loggedIn={true} />
          <Movies movies={movies}/>
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header loggedIn={true} />
          <SavedMovies movies={savedMovies} />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header loggedIn={true} />
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
