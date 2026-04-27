import React from 'react';

const Contato = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Entre em Contato</h2>
      <p>Tem alguma dúvida sobre nossos monstros ou quer relatar um avistamento alienígena? Mande uma mensagem!</p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Nome:
          <input type="text" placeholder="Seu nome" style={{ width: '100%', padding: '5px' }} />
        </label>
        <label>
          E-mail:
          <input type="email" placeholder="seu@email.com" style={{ width: '100%', padding: '5px' }} />
        </label>
        <label>
          Mensagem:
          <textarea placeholder="Como podemos te ajudar?" style={{ width: '100%', padding: '5px', height: '100px' }}></textarea>
        </label>
        <button type="button" style={{ padding: '10px', cursor: 'pointer' }}>Enviar Mensagem</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Outros canais:</h3>
        <p>📧 Email: contato@invazoresshop.com</p>
        <p>📞 Telefone: (11) 98545-3583</p>
        <p>📷 Instagram: @invazores_shop</p>
      </div>
    </div>
  );
};

export default Contato;
