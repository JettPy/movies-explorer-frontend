import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Promo />
      <Footer />
    </>
  );
}

export default App;
