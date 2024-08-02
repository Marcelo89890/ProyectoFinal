document.addEventListener('DOMContentLoaded', () => {
  Transiciones()
})
  

function Transiciones() {
  ScrollReveal().reveal('.cabecera');
  ScrollReveal().reveal('.tarjetas-noticias', { delay: 500 });
  ScrollReveal().reveal('.banner-tarjetas-uno', { delay: 500 });
  ScrollReveal().reveal('.banner-tarjetas-dos', { delay: 500 });
}
