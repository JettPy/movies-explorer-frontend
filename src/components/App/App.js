import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header loggedIn={false} />
      <Footer />
    </>
  );
}

export default App;
