console.log("Loading script iniciado");

const params = new URLSearchParams(window.location.search);
const target = params.get("next");

if (target) {
  console.log("Redirecionando para:", target);
  setTimeout(() => {
    window.location.href = target;
  }, 1000); // tempo de exibição do loader
} else {
  console.log("Nenhum destino encontrado na URL");
  document.querySelector(".loading-text").textContent = "Página de destino não encontrada.";
}
