# MenuZap | Cardápio Digital com QR Code

Cardápio digital responsivo para pequenos negócios receberem pedidos pelo WhatsApp — sem app, sem mensalidade, sem plataforma de terceiros.

![Em produção](https://img.shields.io/badge/status-live-brightgreen)

## Demo

| | URL |
|---|---|
| **Cardápio** | https://menuzap-cardapio-digital.vercel.app/ |
| **Gerador de QR Code** | https://menuzap-cardapio-digital.vercel.app/qrcode.html |

## Funcionalidades

- Cardápio com busca em tempo real e filtros por categoria
- Modal de detalhes do produto
- Carrinho com controle de quantidade e cálculo automático do total
- Seleção de forma de pagamento (Pix ou dinheiro)
- Chave Pix exibida e copiável apenas quando Pix é selecionado
- Finalização com mensagem pronta no WhatsApp (itens, total, pagamento)
- Gerador de QR Code para o cardápio com download em PNG
- Layout 100% responsivo para celular

## Tecnologias

- HTML5, CSS3, JavaScript vanilla
- Deploy: Vercel

## Screenshots

### Cardápio — desktop
![Cardápio desktop](docs/screenshots/cardapio-desktop.png)

### Cardápio — mobile
![Cardápio mobile](docs/screenshots/cardapio-mobile.png)

### Carrinho com itens
![Carrinho](docs/screenshots/carrinho-desktop.png)

### Gerador de QR Code
![QR Code](docs/screenshots/qrcode-desktop.png)

## Como rodar localmente

```bash
git clone https://github.com/RhanielRodri/menuzap-cardapio-digital.git
cd menuzap-cardapio-digital
```

Abra `index.html` diretamente no navegador. Sem dependências, sem build.

## O que este projeto demonstra

- **Manipulação de DOM sem framework**: carrinho, filtros e busca implementados em JS puro com estado gerenciado manualmente
- **Integração com WhatsApp via deep link formatado**: mensagem gerada dinamicamente com itens, quantidades, total e forma de pagamento
- **Geração de QR Code no browser**: usando a biblioteca QRCode.js sem backend
- **Lógica condicional de pagamento**: Pix só aparece quando selecionado, com copy-to-clipboard nativo
- **Layout responsivo sem framework CSS**: breakpoints definidos manualmente para mobile-first

## Autor

Desenvolvido por Rhaniel Rodrigues.

GitHub: https://github.com/RhanielRodri
