const imageUpload = document.getElementById("image-upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

imageUpload.addEventListener("change", handleImageUpload);

function handleImageUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function analyzeImage() {
  // Função para enviar a imagem para o backend para análise
  alert("Imagem analisada!");
}
