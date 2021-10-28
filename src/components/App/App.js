import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
