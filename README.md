# Invazores Shop 

A Invazores Shop é uma aplicação React desenvolvida para a venda de monstrinhos únicos e bizarros (baseado em um sistema de rpg de mesa). O projeto foca em uma interface simples, utilizando React Router para navegação e componentes modulares.

## Tecnologias Utilizadas
- React.js
- React Router DOM
- CSS Vanilla

## Componentes Criados

Abaixo, uma breve explicação de cada componente que compõe a aplicação:

### 1. `Header`
O cabeçalho do site. Contém o título da loja e o menu de navegação que permite transitar entre as páginas de Início, Produtos, Sobre e Contato.

### 2. `Banner`
A seção principal da página inicial. Apresenta um título chamativo, um subtítulo e uma imagem de destaque para atrair os usuários.

### 3. `ListaProdutos`
Este componente é o container principal da página de produtos. Ele armazena o estado (array) com as informações de todos os monstros (Mãodíbula, Gadolinha, etc.) e utiliza o método `.map()` para renderizar cada um deles.

### 4. `CardProduto`
Um componente que representa um card individual de monstro. Ele recebe os dados de um `produto` via *props* e renderiza sua imagem, nome, descrição e preço.

### 5. `Sobre`
Uma página que explica a história da Invazores Shop e sua missão de conectar humanos a criaturas estranhas.

### 6. `Contato`
Uma área dedicada para o suporte e comunicação. Inclui um formulário (Nome, E-mail, Mensagem) e informações adicionais como telefone e redes sociais.

### 7. `Footer`
O rodapé da aplicação, contendo informações de direitos autorais e créditos do desenvolvedor.

### 8. `App`
O componente raiz que gerencia o sistema de rotas (`BrowserRouter`, `Routes`, `Route`) e organiza a estrutura global da página (Header em cima, Footer embaixo e o conteúdo dinâmico no meio).

---
*Desenvolvido por Rian Nito Verçosa do Nascimento*
