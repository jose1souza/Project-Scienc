console.log("Loading script iniciado");

const params = new URLSearchParams(window.location.search);
const target = params.get("next");
const hasRedirectedKey = "hasRedirected";

if (target) {
    console.log("Destino encontrado:", target);

    if (!sessionStorage.getItem(hasRedirectedKey)) {
        sessionStorage.setItem(hasRedirectedKey, 'true'); // Marca a sessão
        console.log("Redirecionando para:", target);

        history.replaceState({ redirect: target }, document.title, window.location.href);

        setTimeout(() => {
            window.location.replace(target); // Usa replace() para evitar que o "Voltar" volte para a página de loading.
        }, 500);

    } else {
        console.log("Redirecionamento já processado nesta sessão. Não redirecionando novamente.");
        sessionStorage.removeItem(hasRedirectedKey); // Opcional: Limpa a marcação para permitir novo fluxo.
    }

} else {
    console.log("Nenhum destino 'next' encontrado na URL");
    const loadingTextElement = document.querySelector(".loading-text");
    if (loadingTextElement) {
        loadingTextElement.textContent = "Página de destino não encontrada.";
    }

    sessionStorage.removeItem(hasRedirectedKey);
}

window.addEventListener("popstate", (event) => {

    console.log("Usuário navegou no histórico (popstate). Estado:", event.state);

        if (target) {
        console.log("Redirecionando de volta para o destino original:", target);
        window.location.replace(target);
    } else {
        // Se não há destino original, e ele está voltando, leva para a página inicial
        console.log("Nenhum destino. Redirecionando para a raiz /");
        window.location.href = "/";
    }
});

window.addEventListener("beforeunload", () => {
    sessionStorage.removeItem(hasRedirectedKey);
});