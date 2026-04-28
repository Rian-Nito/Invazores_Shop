import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="store-name">Invazores Shop</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Início</Link></li>
          <li><Link to="/produtos" className="nav-link">Produtos</Link></li>
          <li><Link to="/sobre" className="nav-link">Sobre</Link></li>
          <li><Link to="/contato" className="nav-link">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

