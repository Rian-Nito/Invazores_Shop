import React from 'react';

const Contato = () => {
  return (
    <div className="page-container">
      <h2 className="page-title">Entre em Contato</h2>
      <p className="content-text">Tem alguma dúvida sobre nossos monstros ou quer relatar um avistamento alienígena? Mande uma mensagem!</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" placeholder="Seu nome" />
        </div>
        <div className="form-group">
          <label>E-mail:</label>
          <input type="email" placeholder="seu@email.com" />
        </div>
        <div className="form-group">
          <label>Mensagem:</label>
          <textarea placeholder="Como podemos te ajudar?" rows="5"></textarea>
        </div>
        <button type="button" className="submit-button">Enviar Mensagem</button>
      </form>

      <div style={{ marginTop: '40px' }}>
        <h3>Outros canais:</h3>
        <p className="content-text">📧 Email: contato@invazoresshop.com</p>
        <p className="content-text">📞 Telefone: (11) 98545-3583</p>
        <p className="content-text">📷 Instagram: @invazores_shop</p>
      </div>
    </div>
  );
};

export default Contato;

