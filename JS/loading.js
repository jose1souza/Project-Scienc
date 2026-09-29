const params = new URLSearchParams(window.location.search);
const target = params.get("next");
const loadingTextElement = document.querySelector(".loading-text");

if (!target) {
    loadingTextElement.textContent = "Página de destino não encontrada.";
} else {
    let destination;

    try {
        destination = new URL(target, window.location.href);
    } catch {
        destination = null;
    }

    const supportedProtocol = destination && ["http:", "https:", "file:"].includes(destination.protocol);

    if (!supportedProtocol) {
        loadingTextElement.textContent = "Destino inválido.";
    } else {
        window.setTimeout(() => window.location.replace(destination.href), 350);
    }
}
