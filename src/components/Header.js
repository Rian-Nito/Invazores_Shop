import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Invazores Shop</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
