console.log("Loading script iniciado");

const params = new URLSearchParams(window.location.search);
const target = params.get("next");

if (target) {
  console.log("Redirecionando para:", target);
  setTimeout(() => {
    window.location.href = target;
  }, 700);
} else {
  console.log("Nenhum destino encontrado na URL");
  document.querySelector(".loading-text").textContent = "Página de destino não encontrada.";
}

window.addEventListener("popstate", (event) => {
  console.log("Usuário clicou em voltar");

  if (!target) {
    window.location.href = "/";
  } else {
    window.location.href = target;
  }
});

history.replaceState({ redirected: true }, "", window.location.href);
