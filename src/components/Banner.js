import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from './imagens/Banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2 className="banner-title">Os monstros mais estranhudos só aqui.</h2>
        <p className="banner-subtitle">Conheça seu novo monstrinho favorito.</p>
        <button className="banner-button">
          <Link to="/produtos" className="nav-link">Explorar Produtos</Link>
        </button>
      </div>
      <div className="banner-image-container">
        <img src={bannerImg} alt="Banner Loja" className="banner-image" />
      </div>
    </section>
  );
};

export default Banner;

