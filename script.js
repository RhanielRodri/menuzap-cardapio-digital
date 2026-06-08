const whatsappNumber = "5500000000000";

const products = [
  {
    id: 1,
    nome: "Burger Clássico",
    categoria: "Lanches",
    descricaoCurta: "Pão brioche, hambúrguer artesanal, queijo e molho da casa.",
    descricaoCompleta: "Um clássico da Burger House com pão brioche macio, hambúrguer artesanal suculento, queijo derretido e molho da casa.",
    preco: 24.9,
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    maisPedido: true,
    disponivel: true
  },
  {
    id: 2,
    nome: "Bacon Burger",
    categoria: "Lanches",
    descricaoCurta: "Hambúrguer artesanal, queijo, bacon crocante e molho especial.",
    descricaoCompleta: "Hambúrguer artesanal com queijo bem derretido, bacon crocante, salada fresca e molho especial levemente defumado.",
    preco: 29.9,
    imagem: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
    maisPedido: true,
    disponivel: true
  },
  {
    id: 3,
    nome: "Chicken Burger",
    categoria: "Lanches",
    descricaoCurta: "Frango empanado, queijo, alface e maionese temperada.",
    descricaoCompleta: "Frango empanado crocante servido no pão macio com queijo, alface fresca e maionese temperada da casa.",
    preco: 26.9,
    imagem: "https://images.unsplash.com/photo-1606755962773-d324e9a13086?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 4,
    nome: "Coca-Cola lata",
    categoria: "Bebidas",
    descricaoCurta: "Refrigerante lata 350ml.",
    descricaoCompleta: "Coca-Cola lata 350ml gelada para acompanhar seu lanche favorito.",
    preco: 6,
    imagem: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 5,
    nome: "Suco natural",
    categoria: "Bebidas",
    descricaoCurta: "Suco natural da fruta 300ml.",
    descricaoCompleta: "Suco natural feito na hora, servido gelado em copo de 300ml.",
    preco: 8,
    imagem: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 6,
    nome: "Água mineral",
    categoria: "Bebidas",
    descricaoCurta: "Água mineral sem gás 500ml.",
    descricaoCompleta: "Água mineral sem gás 500ml, ideal para uma opção leve e refrescante.",
    preco: 4,
    imagem: "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 7,
    nome: "Brownie com sorvete",
    categoria: "Sobremesas",
    descricaoCurta: "Brownie chocolatudo servido com sorvete.",
    descricaoCompleta: "Brownie de chocolate intenso, servido quente com uma bola de sorvete cremoso.",
    preco: 18.9,
    imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
    maisPedido: true,
    disponivel: true
  },
  {
    id: 8,
    nome: "Pudim da casa",
    categoria: "Sobremesas",
    descricaoCurta: "Pudim cremoso com calda de caramelo.",
    descricaoCompleta: "Pudim cremoso da casa com textura leve e calda de caramelo artesanal.",
    preco: 12.9,
    imagem: "https://images.unsplash.com/photo-1514517220039-8ce97a34a7b6?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 9,
    nome: "Milkshake",
    categoria: "Sobremesas",
    descricaoCurta: "Milkshake cremoso nos sabores chocolate ou morango.",
    descricaoCompleta: "Milkshake bem cremoso nos sabores chocolate ou morango, finalizado com calda.",
    preco: 16.9,
    imagem: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 10,
    nome: "Combo Clássico",
    categoria: "Combos",
    descricaoCurta: "Burger clássico, batata frita e refrigerante.",
    descricaoCompleta: "Combo com Burger Clássico, porção de batata frita crocante e refrigerante lata 350ml.",
    preco: 34.9,
    imagem: "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=900&q=80",
    maisPedido: true,
    disponivel: true
  },
  {
    id: 11,
    nome: "Combo Bacon",
    categoria: "Combos",
    descricaoCurta: "Bacon burger, batata frita e refrigerante.",
    descricaoCompleta: "Combo com Bacon Burger, batata frita crocante e refrigerante lata 350ml.",
    preco: 39.9,
    imagem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 12,
    nome: "Combo Família",
    categoria: "Combos",
    descricaoCurta: "4 burgers, 2 batatas grandes e 4 refrigerantes.",
    descricaoCompleta: "Combo para dividir com 4 burgers, 2 porções grandes de batata frita e 4 refrigerantes.",
    preco: 119.9,
    imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80",
    maisPedido: false,
    disponivel: true
  }
];

const productsGrid = document.querySelector("#productsGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-button");
const modal = document.querySelector("#productModal");
const closeModalButton = document.querySelector("#closeModal");
const modalImage = document.querySelector("#modalImage");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalPrice = document.querySelector("#modalPrice");
const modalWhatsapp = document.querySelector("#modalWhatsapp");
const modalAddToCart = document.querySelector("#modalAddToCart");
const openCartButton = document.querySelector("#openCart");
const closeCartButton = document.querySelector("#closeCart");
const cartPanel = document.querySelector("#cartPanel");
const cartItems = document.querySelector("#cartItems");
const cartEmpty = document.querySelector("#cartEmpty");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const finishOrder = document.querySelector("#finishOrder");
const screenOverlay = document.querySelector("#screenOverlay");

let activeCategory = "Todos";
let currentProductId = null;
let cart = [];

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function createSingleWhatsappLink(productName) {
  const message = `Olá! Quero pedir: ${productName}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function createCartWhatsappLink() {
  const lines = cart.map((item) => {
    const product = getProductById(item.id);
    return `${item.quantity}x ${product.nome} - ${formatPrice(product.preco * item.quantity)}`;
  });

  const message = `Olá! Quero fazer um pedido:\n\n${lines.join("\n")}\n\nTotal: ${formatPrice(getCartTotal())}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getProductById(productId) {
  return products.find((product) => product.id === Number(productId));
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.id);
    return total + product.preco * item.quantity;
  }, 0);
}

function getCartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function getFilteredProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.categoria === activeCategory;
    const matchesSearch = product.nome.toLowerCase().includes(searchTerm);
    return product.disponivel && matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  productsGrid.innerHTML = "";
  emptyState.hidden = filteredProducts.length > 0;

  filteredProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.tabIndex = 0;
    card.dataset.id = product.id;

    card.innerHTML = `
      ${product.maisPedido ? '<span class="badge">Mais pedido</span>' : ""}
      <img src="${product.imagem}" alt="${product.nome}" loading="lazy">
      <div class="product-info">
        <span class="product-category">${product.categoria}</span>
        <h3>${product.nome}</h3>
        <p>${product.descricaoCurta}</p>
        <span class="price">${formatPrice(product.preco)}</span>
        <button class="add-button" type="button" data-id="${product.id}">Adicionar ao pedido</button>
      </div>
    `;

    card.addEventListener("click", () => openModal(product.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        openModal(product.id);
      }
    });

    card.querySelector(".add-button").addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(product.id);
      openCart();
    });

    productsGrid.appendChild(card);
  });
}

function renderCart() {
  const quantity = getCartQuantity();
  const total = getCartTotal();

  cartItems.innerHTML = "";
  cartEmpty.hidden = cart.length > 0;
  cartCount.textContent = quantity === 1 ? "1 item" : `${quantity} itens`;
  cartTotal.textContent = formatPrice(total);

  if (cart.length === 0) {
    finishOrder.href = "#";
    finishOrder.classList.add("disabled");
    finishOrder.setAttribute("aria-disabled", "true");
    return;
  }

  cart.forEach((item) => {
    const product = getProductById(item.id);
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <div>
        <strong>${product.nome}</strong>
        <span>${formatPrice(product.preco * item.quantity)}</span>
      </div>
      <div class="quantity-control" aria-label="Quantidade de ${product.nome}">
        <button type="button" data-action="decrease" data-id="${product.id}" aria-label="Diminuir quantidade">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-action="increase" data-id="${product.id}" aria-label="Aumentar quantidade">+</button>
      </div>
      <button class="remove-button" type="button" data-action="remove" data-id="${product.id}">Remover</button>
    `;

    cartItems.appendChild(cartItem);
  });

  finishOrder.href = createCartWhatsappLink();
  finishOrder.classList.remove("disabled");
  finishOrder.setAttribute("aria-disabled", "false");
}

function setActiveCategory(category) {
  activeCategory = category;

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  renderProducts();
}

function addToCart(productId) {
  const item = cart.find((cartItem) => cartItem.id === Number(productId));

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: Number(productId), quantity: 1 });
  }

  renderCart();
}

function decreaseCartItem(productId) {
  const item = cart.find((cartItem) => cartItem.id === Number(productId));

  if (!item) {
    return;
  }

  item.quantity -= 1;

  if (item.quantity <= 0) {
    removeCartItem(productId);
    return;
  }

  renderCart();
}

function removeCartItem(productId) {
  cart = cart.filter((item) => item.id !== Number(productId));
  renderCart();
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  screenOverlay.hidden = false;
  document.body.classList.add("panel-open");
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  screenOverlay.hidden = true;
  document.body.classList.remove("panel-open");
}

function openModal(productId) {
  const product = getProductById(productId);

  if (!product) {
    return;
  }

  currentProductId = product.id;
  modalImage.src = product.imagem;
  modalImage.alt = product.nome;
  modalCategory.textContent = product.categoria;
  modalTitle.textContent = product.nome;
  modalDescription.textContent = product.descricaoCompleta;
  modalPrice.textContent = formatPrice(product.preco);
  modalWhatsapp.href = createSingleWhatsappLink(product.nome);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeModalButton.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  currentProductId = null;
}

searchInput.addEventListener("input", renderProducts);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveCategory(button.dataset.category));
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const productId = button.dataset.id;
  const action = button.dataset.action;

  if (action === "increase") {
    addToCart(productId);
  }

  if (action === "decrease") {
    decreaseCartItem(productId);
  }

  if (action === "remove") {
    removeCartItem(productId);
  }
});

modalAddToCart.addEventListener("click", () => {
  if (!currentProductId) {
    return;
  }

  addToCart(currentProductId);
  closeModal();
  openCart();
});

finishOrder.addEventListener("click", (event) => {
  if (cart.length === 0) {
    event.preventDefault();
  }
});

openCartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
screenOverlay.addEventListener("click", closeCart);
closeModalButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal.classList.contains("open")) {
      closeModal();
    }

    if (cartPanel.classList.contains("open")) {
      closeCart();
    }
  }
});

renderProducts();
renderCart();
