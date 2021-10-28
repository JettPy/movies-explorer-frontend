import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import './App.css';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Promo />
      <AboutProject />
      <Techs />
      <Footer />
    </>
  );
}

export default App;
