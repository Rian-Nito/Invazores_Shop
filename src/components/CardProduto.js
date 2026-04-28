import React from 'react';

const CardProduto = ({ produto }) => {
  return (
    <div className="product-card">
      <img src={produto.img} alt={produto.name} className="product-image" />
      <h3 className="product-name">{produto.name}</h3>
      <p className="product-description">{produto.description}</p>
      <span className="product-price">{produto.price}</span>
      <button className="buy-button">Capturar</button>
    </div>
  );
};

export default CardProduto;

