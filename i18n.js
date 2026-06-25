const translations = {
  pt: {
    nav_demo: "Demonstração",
    nav_menu: "Cardápio",
    nav_qrcode: "QR Code",
    nav_contact: "Contato",
    nav_qr_btn: "Gerar QR",
    hero_eyebrow: "Solução demonstrativa para negócios locais",
    hero_title: "Cardápio digital com QR Code e pedidos pelo WhatsApp",
    hero_desc: "Uma solução simples para pequenos negócios receberem pedidos sem aplicativo, sem taxa e sem complicação.",
    hero_btn_demo: "Ver demonstração",
    hero_btn_qr: "Gerar QR Code",
    strip_hours: "Aberto hoje das 18h às 23h",
    strip_metric_1: "Busca rápida",
    strip_metric_2: "Carrinho completo",
    strip_metric_3: "Pedido no WhatsApp",
    menu_eyebrow: "Cardápio da demonstração",
    menu_title: "Escolha os itens do pedido",
    menu_desc: "Filtre por categoria, veja os detalhes e monte um pedido completo para enviar pelo WhatsApp.",
    search_label: "Buscar produto",
    search_placeholder: "Buscar produto...",
    filter_all: "Todos",
    filter_snacks: "Lanches",
    filter_drinks: "Bebidas",
    filter_desserts: "Sobremesas",
    filter_combos: "Combos",
    empty_state: "Nenhum produto encontrado.",
    cart_float_label: "Ver pedido",
    cart_eyebrow: "Seu pedido",
    cart_title: "Resumo do pedido",
    cart_empty_msg: "Seu pedido está vazio.",
    payment_title: "Forma de pagamento",
    payment_cash: "Dinheiro",
    payment_card: "Cartão na entrega/retirada",
    pix_label: "Chave Pix",
    pix_copy_btn: "Copiar chave Pix",
    pix_copied: "Chave Pix copiada!",
    pix_copy_error: "Não foi possível copiar a chave Pix.",
    total_label: "Total",
    finish_btn: "Finalizar pelo WhatsApp",
    modal_add_btn: "Adicionar ao pedido",
    modal_single_btn: "Pedir somente este item",
    footer_tagline: "Solução demonstrativa para cardápios digitais.",
    footer_hours_title: "Horário",
    footer_hours: "Segunda a domingo, das 18h às 23h",
    badge_popular: "Mais pedido",
    btn_add: "Adicionar ao pedido",
    cart_remove: "Remover",
    cart_count: (n) => n === 1 ? "1 item" : `${n} itens`,
    aria_decrease: (name) => `Diminuir quantidade de ${name}`,
    aria_increase: (name) => `Aumentar quantidade de ${name}`,
    aria_open_cart: "Abrir carrinho",
    aria_close_cart: "Fechar carrinho",
    aria_close_modal: "Fechar modal",
  },
  en: {
    nav_demo: "Demo",
    nav_menu: "Menu",
    nav_qrcode: "QR Code",
    nav_contact: "Contact",
    nav_qr_btn: "Generate QR",
    hero_eyebrow: "Demo solution for local businesses",
    hero_title: "Digital menu with QR Code and orders via WhatsApp",
    hero_desc: "A simple solution for small businesses to receive orders without an app, without fees and without hassle.",
    hero_btn_demo: "View demo",
    hero_btn_qr: "Generate QR Code",
    strip_hours: "Open today from 6pm to 11pm",
    strip_metric_1: "Quick search",
    strip_metric_2: "Full cart",
    strip_metric_3: "Order on WhatsApp",
    menu_eyebrow: "Demo menu",
    menu_title: "Choose your order items",
    menu_desc: "Filter by category, view details and build a complete order to send via WhatsApp.",
    search_label: "Search product",
    search_placeholder: "Search product...",
    filter_all: "All",
    filter_snacks: "Snacks",
    filter_drinks: "Drinks",
    filter_desserts: "Desserts",
    filter_combos: "Combos",
    empty_state: "No products found.",
    cart_float_label: "View order",
    cart_eyebrow: "Your order",
    cart_title: "Order summary",
    cart_empty_msg: "Your order is empty.",
    payment_title: "Payment method",
    payment_cash: "Cash",
    payment_card: "Card on delivery/pickup",
    pix_label: "Pix key",
    pix_copy_btn: "Copy Pix key",
    pix_copied: "Pix key copied!",
    pix_copy_error: "Could not copy Pix key.",
    total_label: "Total",
    finish_btn: "Finish via WhatsApp",
    modal_add_btn: "Add to order",
    modal_single_btn: "Order this item only",
    footer_tagline: "Demo solution for digital menus.",
    footer_hours_title: "Hours",
    footer_hours: "Monday to Sunday, 6pm to 11pm",
    badge_popular: "Popular",
    btn_add: "Add to order",
    cart_remove: "Remove",
    cart_count: (n) => `${n} item${n !== 1 ? "s" : ""}`,
    aria_decrease: (name) => `Decrease quantity of ${name}`,
    aria_increase: (name) => `Increase quantity of ${name}`,
    aria_open_cart: "Open cart",
    aria_close_cart: "Close cart",
    aria_close_modal: "Close modal",
  }
};

const STORAGE_KEY = "menuzap_locale";

function detectLocale() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  return (navigator.language || "pt").startsWith("pt") ? "pt" : "en";
}

let currentLocale = detectLocale();
window.t = translations[currentLocale];

function applyTranslations(locale) {
  currentLocale = locale;
  window.t = translations[locale];
  localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.dataset.i18n;
    var val = translations[locale][key];
    if (typeof val === "string") el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.dataset.i18nPlaceholder;
    var val = translations[locale][key];
    if (typeof val === "string") el.placeholder = val;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var key = el.dataset.i18nAria;
    var val = translations[locale][key];
    if (typeof val === "string") el.setAttribute("aria-label", val);
  });

  var btnPT = document.getElementById("langPT");
  var btnEN = document.getElementById("langEN");
  if (btnPT) btnPT.classList.toggle("lang-active", locale === "pt");
  if (btnEN) btnEN.classList.toggle("lang-active", locale === "en");

  if (typeof renderProducts === "function") renderProducts();
  if (typeof renderCart === "function") renderCart();
}

document.addEventListener("DOMContentLoaded", function () {
  applyTranslations(currentLocale);

  var btnPT = document.getElementById("langPT");
  var btnEN = document.getElementById("langEN");
  if (btnPT) btnPT.addEventListener("click", function () { applyTranslations("pt"); });
  if (btnEN) btnEN.addEventListener("click", function () { applyTranslations("en"); });
});
