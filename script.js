const whatsappNumber = "5500000000000";
const placeholderImage = "assets/products/placeholder.jpg";

const products = [
  {
    id: 1,
    nome: "Burger Clássico",
    categoria: "Lanches",
    descricaoCurta: "Pão brioche, hambúrguer artesanal, queijo e molho da casa.",
    descricaoCompleta:
      "Um clássico da Burger House com pão brioche macio, hambúrguer artesanal suculento, queijo derretido e molho da casa.",
    preco: 24.9,
    imagem:
      "assets/products/burger-classico.jpg",
    maisPedido: true,
    disponivel: true
  },
  {
    id: 2,
    nome: "Bacon Burger",
    categoria: "Lanches",
    descricaoCurta: "Hambúrguer artesanal, queijo, bacon crocante e molho especial.",
    descricaoCompleta:
      "Hambúrguer artesanal com queijo bem derretido, bacon crocante, salada fresca e molho especial levemente defumado.",
    preco: 29.9,
    imagem:
      "assets/products/bacon-burger.jpg",
    maisPedido: true,
    disponivel: true
  },
  {
    id: 3,
    nome: "Chicken Burger",
    categoria: "Lanches",
    descricaoCurta: "Frango empanado, queijo, alface e maionese temperada.",
    descricaoCompleta:
      "Frango empanado crocante servido no pão macio com queijo, alface fresca e maionese temperada da casa.",
    preco: 26.9,
    imagem:
      "assets/products/chicken-burger.jpg",
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
    imagem:
      "assets/products/coca-cola.jpg",
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
    imagem:
      "assets/products/suco-natural.jpg",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 6,
    nome: "Água mineral",
    categoria: "Bebidas",
    descricaoCurta: "Água mineral sem gás 500ml.",
    descricaoCompleta:
      "Água mineral sem gás 500ml, ideal para uma opção leve e refrescante.",
    preco: 4,
    imagem:
      "assets/products/agua-mineral.jpg",
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
    imagem:
      "assets/products/brownie-sorvete.jpg",
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
    imagem:
      "assets/products/pudim.jpg",
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
    imagem:
      "assets/products/milkshake.jpg",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 10,
    nome: "Combo Clássico",
    categoria: "Combos",
    descricaoCurta: "Burger clássico, batata frita e refrigerante.",
    descricaoCompleta:
      "Combo com Burger Clássico, porção de batata frita crocante e refrigerante lata 350ml.",
    preco: 34.9,
    imagem:
      "assets/products/combo-classico.jpg",
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
    imagem:
      "assets/products/combo-bacon.jpg",
    maisPedido: false,
    disponivel: true
  },
  {
    id: 12,
    nome: "Combo Família",
    categoria: "Combos",
    descricaoCurta: "4 burgers, 2 batatas grandes e 4 refrigerantes.",
    descricaoCompleta:
      "Combo para dividir com 4 burgers, 2 porções grandes de batata frita e 4 refrigerantes.",
    preco: 119.9,
    imagem:
      "assets/products/combo-familia.jpg",
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
const paymentOptions = document.querySelectorAll("input[name='paymentMethod']");
const pixBox = document.querySelector("#pixBox");
const pixKey = document.querySelector("#pixKey");
const copyPixKeyButton = document.querySelector("#copyPixKey");
const copyPixMessage = document.querySelector("#copyPixMessage");

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
    return `${item.quantity}x ${product.nome} - ${formatPrice(
      product.preco * item.quantity
    )}`;
  });
  const paymentMethod = getSelectedPaymentMethod();
  const pixLine =
    paymentMethod === "Pix" ? `\nChave Pix: ${pixKey.textContent}` : "";

  const message = `Olá! Quero fazer um pedido:\n\n${lines.join(
    "\n"
  )}\n\nTotal: ${formatPrice(
    getCartTotal()
  )}\n\nForma de pagamento: ${paymentMethod}${pixLine}`;

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

function getSelectedPaymentMethod() {
  const selectedPayment = document.querySelector(
    "input[name='paymentMethod']:checked"
  );

  return selectedPayment ? selectedPayment.value : "Pix";
}

function getFilteredProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory =
      activeCategory === "Todos" || product.categoria === activeCategory;
    const matchesSearch = product.nome.toLowerCase().includes(searchTerm);

    return product.disponivel && matchesCategory && matchesSearch;
  });
}

function applyImageFallback(imageElement) {
  imageElement.addEventListener("error", () => {
    if (imageElement.src.includes(placeholderImage)) {
      return;
    }

    imageElement.src = placeholderImage;
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
        <strong class="price">${formatPrice(product.preco)}</strong>
        <button class="add-button" type="button" data-id="${product.id}">
          Adicionar ao pedido
        </button>
      </div>
    `;

    const image = card.querySelector("img");
    const addButton = card.querySelector(".add-button");

    card.addEventListener("click", () => openModal(product.id));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && event.target === card) {
        openModal(product.id);
      }
    });

    addButton.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(product.id);
      openCart();
    });

    applyImageFallback(image);
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
      <div class="cart-item-info">
        <strong>${product.nome}</strong>
        <span>${formatPrice(product.preco * item.quantity)}</span>
      </div>

      <div class="cart-item-actions" aria-label="Quantidade de ${product.nome}">
        <button
          type="button"
          data-action="decrease"
          data-id="${product.id}"
          aria-label="Diminuir quantidade"
        >
          −
        </button>
        <span>${item.quantity}</span>
        <button
          type="button"
          data-action="increase"
          data-id="${product.id}"
          aria-label="Aumentar quantidade"
        >
          +
        </button>

        <button
          type="button"
          data-action="remove"
          data-id="${product.id}"
        >
          Remover
        </button>
      </div>
    `;

    cartItems.appendChild(cartItem);
  });

  finishOrder.href = createCartWhatsappLink();
  finishOrder.classList.remove("disabled");
  finishOrder.setAttribute("aria-disabled", "false");
}

function updatePaymentView() {
  const isPixSelected = getSelectedPaymentMethod() === "Pix";
  pixBox.hidden = !isPixSelected;
  copyPixMessage.textContent = "";
  renderCart();
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
  applyImageFallback(modalImage);
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

paymentOptions.forEach((option) => {
  option.addEventListener("change", updatePaymentView);
});

copyPixKeyButton.addEventListener("click", async () => {
  copyPixMessage.textContent = "";

  try {
    await navigator.clipboard.writeText(pixKey.textContent);
    copyPixMessage.textContent = "Chave Pix copiada!";
  } catch {
    copyPixMessage.textContent = "Não foi possível copiar a chave Pix.";
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
updatePaymentView();
