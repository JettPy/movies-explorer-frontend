import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import AboutProject from '../AboutProject/AboutProject';
import './App.css';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Promo />
      <AboutProject />
      <Footer />
    </>
  );
}

export default App;
