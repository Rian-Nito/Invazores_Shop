import { Link } from 'react-router-dom';
import bannerImg from './imagens/Banner.jpg';

const Banner = () => {
  return (
    <section>
      <div>
        <h2>Os monstros mais estranhudos só aqui.</h2>
        <p>Conheça seu novo monstrinho favorito.</p>
        <button><Link to="/produtos">Explorar Produtos</Link></button>
      </div>
      <div>
        <img src={bannerImg} alt="Banner Loja" />
      </div>
    </section>
  );
};

export default Banner;
