# MenuZap | Cardápio Digital com QR Code

MenuZap é um cardápio digital responsivo criado para pequenos negócios receberem pedidos pelo WhatsApp de forma simples, rápida e organizada.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Demonstração

- Projeto publicado: https://menuzap-cardapio-digital.vercel.app/
- Gerador de QR Code: https://menuzap-cardapio-digital.vercel.app/qrcode.html

## Problema que o projeto resolve

Muitos pequenos negócios recebem pedidos pelo WhatsApp de forma manual: enviam cardápio, chave Pix, confirmam itens um por um e calculam o total durante a conversa.

O MenuZap organiza esse fluxo com um cardápio digital, carrinho, seleção de forma de pagamento, Pix facilitado e pedido pronto para envio no WhatsApp.

## Funcionalidades

- Cardápio digital responsivo
- Busca de produtos em tempo real
- Filtros por categoria
- Cards de produtos com imagem, descrição e preço
- Modal com detalhes do produto
- Carrinho com adicionar, aumentar, diminuir e remover itens
- Cálculo automático do total
- Seleção de forma de pagamento
- Chave Pix exibida somente quando Pix é selecionado
- Copiar chave Pix
- Finalização do pedido pelo WhatsApp
- Mensagem automática com itens, total e forma de pagamento
- Gerador de QR Code para o cardápio
- Download do QR Code
- Layout adaptado para celular

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Vercel

## Estrutura do Projeto

```text
menuzap-cardapio-digital/
├── index.html
├── qrcode.html
├── style.css
├── script.js
├── qrcode.js
├── assets/
│   └── products/
└── README.md
```

## Como Rodar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/RhanielRodri/menuzap-cardapio-digital.git
```

2. Acesse a pasta do projeto:

```bash
cd menuzap-cardapio-digital
```

3. Abra o arquivo `index.html` no navegador.

Por ser um projeto com HTML, CSS e JavaScript puro, não é necessário instalar dependências, configurar backend ou rodar build.

## Fluxo do Usuário

1. O cliente acessa o cardápio pelo link ou QR Code.
2. Escolhe os produtos.
3. Adiciona os itens ao carrinho.
4. Seleciona a forma de pagamento.
5. Finaliza pelo WhatsApp com uma mensagem pronta contendo itens, total e forma de pagamento.

## Observação Sobre Pagamento

Este projeto não processa pagamentos reais nem confirma Pix automaticamente.

A função Pix é um facilitador: exibe a chave Pix, permite copiar a chave e envia a informação junto ao pedido pelo WhatsApp.

## Próximas Melhorias

- Painel administrativo para editar produtos
- Integração com API de pagamento Pix
- Histórico de pedidos
- Controle de status do pedido
- Backend com Node.js ou FastAPI
- Banco de dados

## Aprendizados

- Manipulação de DOM com JavaScript
- Estado de carrinho no front-end
- Geração de mensagens dinâmicas para WhatsApp
- Responsividade
- Organização de fluxo de pedido
- Deploy na Vercel

## Autor

Rhaniel Rodrigues

GitHub: https://github.com/RhanielRodri
