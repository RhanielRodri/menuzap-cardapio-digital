const qrForm = document.querySelector("#qrForm");
const urlInput = document.querySelector("#urlInput");
const qrResult = document.querySelector("#qrResult");
const qrMessage = document.querySelector("#qrMessage");
const qrPlaceholder = document.querySelector("#qrPlaceholder");
const downloadQrButton = document.querySelector("#downloadQr");
const copyLinkButton = document.querySelector("#copyLink");

function clearQrCode() {
  qrResult.innerHTML = "";
  downloadQrButton.hidden = true;
  qrPlaceholder.hidden = false;
}

function generateQrCode(url) {
  clearQrCode();

  new QRCode(qrResult, {
    text: url,
    width: 240,
    height: 240,
    colorDark: "#151515",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  qrPlaceholder.hidden = true;
  downloadQrButton.hidden = false;
}

function getQrImageSource() {
  const canvas = qrResult.querySelector("canvas");
  const image = qrResult.querySelector("img");

  if (canvas) {
    return canvas.toDataURL("image/png");
  }

  return image ? image.src : "";
}

qrForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = urlInput.value.trim();
  qrMessage.textContent = "";

  if (!url) {
    clearQrCode();
    qrMessage.textContent = "Digite uma URL válida para gerar o QR Code.";
    return;
  }

  generateQrCode(url);
});

copyLinkButton.addEventListener("click", async () => {
  const url = urlInput.value.trim();
  qrMessage.textContent = "";

  if (!url) {
    qrMessage.textContent = "Digite uma URL válida para copiar.";
    return;
  }

  try {
    await navigator.clipboard.writeText(url);
    qrMessage.textContent = "Link copiado com sucesso.";
  } catch {
    qrMessage.textContent = "Não foi possível copiar o link automaticamente.";
  }
});

downloadQrButton.addEventListener("click", () => {
  const imageSource = getQrImageSource();

  if (!imageSource) {
    return;
  }

  const downloadLink = document.createElement("a");
  downloadLink.href = imageSource;
  downloadLink.download = "qrcode-menuzap.png";
  downloadLink.click();
});
