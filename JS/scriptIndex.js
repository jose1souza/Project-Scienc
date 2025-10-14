// NAV: muda cor ao rolar
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-top");
  nav.classList.toggle("scrolled", window.scrollY > 250);
});

// ANIMAÇÃO: logo
const logo = document.querySelector("#logotype-image");
if (logo) {
  const logoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        logo.classList.add("animate__animated", "animate__zoomIn");
        console.log("Logo animada");
      }
    });
  }, { threshold: 0.5 });
  logoObserver.observe(logo);
}

// ANIMAÇÃO: sobre o projeto
const aboutSection = document.querySelector(".about-project");
if (aboutSection) {
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeIn");
        console.log("Sobre o projeto animado");
      }
    });
  }, { threshold: 0.3 });
  aboutObserver.observe(aboutSection);
}

// ANIMAÇÃO: cards
const cards = document.querySelectorAll(".card");
if (cards.length > 0) {
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
        console.log("Card animado:", entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach((card) => cardObserver.observe(card));
};