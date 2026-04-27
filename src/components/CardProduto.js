import React from 'react';

const CardProduto = ({ produto }) => {
  return (
    <div style={{ border: '1px solid white', margin: '10px', padding: '10px' }}>
      <img src={produto.img} alt={produto.name} style={{ maxWidth: '150px' }} />
      <h3>{produto.name}</h3>
      <p>{produto.description}</p>
      <span>{produto.price}</span>
      <br />
      <button>Capturar</button>
    </div>
  );
};

export default CardProduto;
