import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import ListaProdutos from './components/ListaProdutos.js';
import Sobre from './components/Sobre.js';
import Contato from './components/Contato.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <Banner />
  </>
);

export default App;
