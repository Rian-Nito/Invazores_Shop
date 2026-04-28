import React from 'react';
import CardProduto from './CardProduto';
import monster1 from './imagens/monster1.png';
import monster2 from './imagens/monster2.png';
import monster3 from './imagens/monster3.png';
import monster4 from './imagens/monster4.png';
import monster5 from './imagens/monster5.png';
import monster6 from './imagens/monster6.png';
import './Products.css';

const listaProdutos = [
  { id: 1, name: 'MÃODÍBULA', price: 'R$ 89,90', img: monster1, description: 'Zumbi, Cadáver, Reviver.' },
  { id: 2, name: 'GADOLINHA', price: 'R$ 120,00', img: monster2, description: 'Vaca? Porco? Galinha?' },
  { id: 3, name: 'TRANCADAVER', price: 'R$ 75,00', img: monster3, description: 'Submundo, Prisão, Correntes.' },
  { id: 4, name: 'LAGARTORRE', price: 'R$ 130,00', img: monster4, description: 'Dragão, Realeza, Castelo.' },
  { id: 5, name: 'VULTREVA', price: 'R$ 120,00', img: monster5, description: 'Simulacro, Escuridão, Sombras.' },
  { id: 6, name: 'APRENTIÇO', price: 'R$ 120,00', img: monster6, description: 'Criaturas, Magia, Estudos.' }
];

const ListaProdutos = () => {
  return (
    <div className="products-container">
      <h2 className="products-title">Nossos Monstros</h2>
      <div className="products-grid">
        {listaProdutos.map(produto => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};

export default ListaProdutos;

