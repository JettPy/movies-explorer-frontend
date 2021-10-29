
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import './App.css';

import { movies, savedMovies } from '../../utils/data.js'



function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={false} />
          <Main />
          <Footer />
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
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
